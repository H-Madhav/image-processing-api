import { Request, Response } from 'express'
import images from './api/images'
const express = require('express')
const routes = express.Router()

routes.get('/', (req: Request, res: Response) => {
    res.redirect('/api/images?fileName=fjord.jpg')
})

routes.use('/api/images', images)

export default routes
