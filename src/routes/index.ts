const express = require('express')
import { Request, Response } from 'express'
import logger from '../utilities/logger'
const routes = express.Router()

routes.get('/', logger, (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default routes
