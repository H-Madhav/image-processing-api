import { promises as fs, existsSync } from 'fs'
import supertest from 'supertest'
import app from '../index';
import {
    createProcessedImage, processedImagePath
} from '../helpers/imageHelpers';
const path = require('path');

const request = supertest(app)

describe('GET /', () => {
    it('redirect the page temporarily', async () => {
        const response = await request.get('/')
        expect(response.status).toBe(302)
    })
})

describe('GET /api/images?fileName=fjord.jpg', () => {
    it('respond with status 200', async () => {
        const response = await request.get('/api/images?fileName=fjord.jpg')
        expect(response.status).toBe(200)
    })
})

describe('Create processed image ', async () => {
    it('return true', async () => {
        if (existsSync(path.join(__dirname, processedImagePath, '600x600fjord.jpg'))) {
            await fs.unlink(path.join(__dirname, processedImagePath, '600x600fjord.jpg'))
        }
        const response = await createProcessedImage(
            'fjord.jpg',
            '600x600fjord.jpg',
            '600',
            '600'
        )
        expect(response).toBeTruthy()
    })
})
