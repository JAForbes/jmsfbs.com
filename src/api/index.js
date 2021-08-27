import express from 'express'
import fs from 'fs/promises'
import HashedModules from '../../hashed-modules/devserver.js'

const app = express()
const port = 3006


// do auth check later
app.use((req, res, next) => {
    req.authenticated = true
    next()
})

app.use(
    HashedModules(x => x, {
        paths: [
            '/src/api/*.js'
        ],
        url: `/hashed-modules`
    })
)

export default app