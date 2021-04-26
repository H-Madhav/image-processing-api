// /api/images?fileName=xyz&width=200&height=200
const express = require('express')
const images = express.Router()
import handleImageValidation from '../../middlewares/handleImageValidation'
import handleImageProcessing from '../../middlewares/handleImageProcessing'

images.get('/', [handleImageValidation, handleImageProcessing])

export default images
