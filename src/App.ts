import express from 'express';
import cors from 'cors'
import helmet from 'helmet'
import { createConnection, Connection } from 'typeorm';

import routes from './routes/routes'
import configs from './configs/configs'

class Server {

    public express: express.Application;

    constructor() {
        this.express = express()
        this.configs()
        this.middlewares()
        this.routes()
        this.database()
    }

    private configs (): void {
        this.express.set('port', configs.Server.port)
    }

    private middlewares(): void {
        this.express.use(helmet())
        this.express.use(cors())
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: true }))
    }

    private routes(): void {
        this.express.use(routes)
    }

    private async database (): Promise<any> {
        return await createConnection();
    }

}

export default new Server().express;