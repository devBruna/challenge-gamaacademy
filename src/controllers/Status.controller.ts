import { RequestHandler, Request, Response, NextFunction } from 'express';
import { uptime, hostname } from 'os'


class StatusController {

    public async status (req: Request, res: Response, next: NextFunction): Promise<Response> {
        return res.status(200).json({
            hostname: req.hostname,
            path: req.path,
            method: req.method,
            ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
            date: new Date(),
            uptime: (uptime() / 60) / 60
        })
    }

}

export default new StatusController()