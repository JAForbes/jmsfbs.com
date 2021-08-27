import HashedModules from '../hashed-modules/vite.js'

const BASE_URL = 'http://localhost:3006'

/**
 * @type {import('vite').UserConfig}
 */
export default ({ command, mode }) => {
    return {
        publicDir: './assets',
        plugins: [
            HashedModules({
                paths: [
                    '/src/api/*.js'
                ],
                url: `/hashed-modules`
            })
        ]
    }
}