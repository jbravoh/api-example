import {createServer} from './utils/server';

createServer()
    .then((server: any) => {
        server.listen(3000, () => {
            console.info(`Listening on http://localhost:3000`)
        })
    })
    .catch((err: any) => {
        console.error(`Error: ${err}`)
    })
