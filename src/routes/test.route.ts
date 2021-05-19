
import { Router } from 'express'

import TestController from '../controllers/Test.controller'

const router = Router()

router.post('/', TestController.createNewFullTest)
router.get('/', TestController.findTestById)

export default router