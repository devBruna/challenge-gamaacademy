import { createServer, Server } from 'http'

import App from '../../src/App'

class ServerTests {

    public server: Server = createServer(App)

    public async start (emmitOn: boolean = false): Promise<void> {
        this.server.listen(App.get('port'), async () => {
            if (emmitOn)
                console.log(`Test Sever online at PORT = ${App.get('port')}`)
        })
    }

    public async close (emmitOff: boolean = false): Promise<void> {
        this.server.close( async () => {
            if (emmitOff)
                console.log(`Test Sever stopped at PORT = ${App.get('port')}`)
        })
    }

}

export default new ServerTests()