import express from 'express'

export default function main( getData, { paths, url } ){

    let app = express.Router()
    
    app.post(url, express.json(), async (req, res) => {
        let out = await getData(req.body) 
        if( !out ) res.status(404).send('No module found')

        let { filepath, args=[], function: fn } = out
        // let importPath = new URL(filepath, import.meta.url)
        let module = await import(filepath)
    
        let result = await module[fn](...args)
    
        res.setHeader('Content-Type', 'application/json')
        res.end( JSON.stringify(result) )
    })

    return app
}