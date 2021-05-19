import { Router } from 'express'

import status from './status.route'
import test from './test.route'

const routes = Router()

routes.use('/status', status)
routes.use('/test', test)

export default routes