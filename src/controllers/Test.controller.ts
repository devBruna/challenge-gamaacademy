import { RequestHandler, Request, Response, NextFunction } from 'express';

import TestService from '../services/Test.service'
import CreateTestValidation from '../validation/CreateTest.validation'
import { requestTestInputs } from '../types/test.types'

class TestController {

    public createNewFullTest: RequestHandler =  async (req: Request, res: Response, next: NextFunction): Promise<Response> => {

        const { error, value } = CreateTestValidation.validate(req.body as requestTestInputs)

        if (error) 
            return res.status(400).json({status: 'failed', msg: error})
        
        let newTest

        try {
            newTest = await TestService.createNewFullTest(value)
        } catch (err) {
            return res.status(400).json({status: 'failed', msg: err})
        }

        return res.status(201).json({status: 'success', data: newTest})
    }

    public findTestById: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        
        let test;

        try {
            test = await TestService.findTestById(+req.params.id)
        } catch (err) {
            return res.status(400).json({status: 'failed', msg: err})
        }
        
        return res.status(200).json({status: 'success', data: test})
    }

    public findTestByTitle: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
        return res.status(200).json({"lala": "lala"})
    }

}

export default new TestController()