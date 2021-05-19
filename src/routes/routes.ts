import { Router } from 'express'

import status from './status.route'

const routes = Router()

routes.use('/status', status)

export default routes