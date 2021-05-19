
import { Router } from 'express'

import TestController from '../controllers/Test.controller'

const router = Router()

router.post('/', TestController.createTest)

export default router