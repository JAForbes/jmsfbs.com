import minimatch from 'minimatch'
import devserver from './devserver.js'


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

let fn = (prefix, fnName, k, path) =>
`export ${prefix} async function ${fnName}(...args){
    return helper("${k}", "${path}", ...args)
}`

export default function HashedModules({ paths, url }){
    let command

    return {
        enforce: 'pre',
        name: 'HashedModules',
        config({}, { command: _ }){
            command = _
        },
        async load(id){
            let yes
            for( let pattern of paths ) {
                
                if(minimatch(id.replace(process.cwd(), ''), pattern)){
                    yes = pattern
                    break;
                }
            }

            if( !yes ) return;
            
            if( command == 'build' ) {
                throw new Error('Not yet implemented')
            } else {
                
                const m = await import(id)
                let fakeModule = Object.keys(m).map(
                    (k) => {
        
                        let prefix = k == 'default' ? 'default' : ''
                        let fnName = k == 'default' ? `main` : k
                        
                        return fn(prefix, fnName, k, id)
                    }
                )
                .concat(helper)
                .join('\n\n')
 
                return fakeModule
            }
        },
        configureServer(server){
            if( command == 'build') {
                return;
            } else {
                server.middlewares.use(
                    devserver(x => x, { paths, url })
                )
            }
        }
    }
}
