import express from 'express'
import fs from 'fs/promises'
import path from 'path'

const app = express()
const port = 3006

// app.get('/hashql', () => {
//     res.send('Hello World!')
// })

app.get('/index.js',async (req, res) => {
    const file = await fs.readFile('./src/index.js')

    res.contentType('application/javascript').send(file)
})

app.get('/node_modules/*.js', async (req, res) => {
    let file = await fs.readFile('./' + req.path)
    
    res.contentType('application/javascript').send(file)
})


app.post('/hashed-modules', express.json(), async (req, res) => {
    let { filepath, args=[], function: fn } = req.body
    let importPath = new URL('..'+filepath, import.meta.url)
    let module = await import(importPath)

    let result = await module[fn](...args)

    res.json(result)
})

app.get('/api/*.js', async (req, res) => {
    let filepath = new URL('..'+req.path, import.meta.url)
    let module = await import(filepath)

    
    let helper = 
`async function helper(fn, filepath, ...args){

    return fetch('/hashed-modules/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            filepath,
            args,
            function: fn
        })
    })
    .then( x => x.json() )
}`;

    
    let fakeModule = Object.keys(module).map(
        (k) => {

            let prefix = k == 'default' ? 'default' : ''
            let fnName = k == 'default' ? `main` : k

return `export ${prefix} async function ${fnName}(...args){
    return helper("${k}", "${req.path}", ...args)
}`
            }
    )
    .concat(helper)
    .join('\n\n')
    
    res.contentType('application/javascript').send(fakeModule)
})

app.get('*', async (req, res) => {

    res.contentType('text/html').send(
        await fs.readFile('./src/index.html')
    )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})