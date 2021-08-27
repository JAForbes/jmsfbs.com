# Hashed Modules

Use server side javascript and typescript from the browser securely!

## Dev Setup

### Dev Server

Everyones dev setup is different.  At time of writing we are only supporting the solutions we actively use, but extending supported bundlers and dev environments is on the roadmap.

If you use an express.js based dev server you can use the hashed modules middleware

```js
app.use(
    hashedModules({
        // any import matching /api/*.js
        prefix: '/api',
        
        // where to search for files matching the prefix
        root: path.resolve(process.cwd(), './src')
    })
)
```

You can also spin up a hashed modules handler via `npx`

```js
npx hashql dev -p 8080
> Running on port 8080
```

This will spin up a new express server with all hashql features out of the box.  If you want to configure this server you can create a `hashql.config.js` file.

### Vite

```js
import hashql from 'hashql/vite'

export default {
    plugins: [
        hashql({
            // ...
            modules: {
                paths: {
                    '/api': '/src/api'
                }
            }
        })
    ]
}
```