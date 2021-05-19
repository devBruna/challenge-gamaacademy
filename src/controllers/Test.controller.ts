import { RequestHandler, Request, Response, NextFunction } from 'express';

import CreateTestValidation from '../validation/CreateTest.validation'
import { createTestInputs } from '../types/test.types'

class TestController {

    public createTest: RequestHandler =  async (req: Request, res: Response, next: NextFunction): Promise<Response> => {

        const { error, value } = CreateTestValidation.validate(req.body as createTestInputs)

        if (error) 
            return res.status(400).json({status: 'failed', msg: error})

        return res.status(200).json({status: 'success', data: value})
    }

}

export default new TestController()