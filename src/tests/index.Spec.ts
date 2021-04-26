import supertest from 'supertest'
import app from '../index'
import {
    createProcessedImage,
    findProcessedImage,
} from '../helpers/imageHelpers'

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

describe('create processed image or serve from cashe', async () => {
    const flag = findProcessedImage('600x600fjord.jpg')
    it('return true or false', async () => {
        const response = await createProcessedImage(
            'fjord.jpg',
            '600x600fjord.jpg',
            '600',
            '600'
        )
        flag ? expect(response).toBeFalsy() : expect(response).toBeTruthy()
    })
})
