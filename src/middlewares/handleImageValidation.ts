import { Request, Response } from 'express'

const handleImageValidation = (req: Request, res: Response, next: Function) => {
    const fileName: string = (req.query.fileName as string) || ''
    const width: string = req.query.width as string
    const height: string = req.query.height as string

    const fileNameAndExtentionArr: Array<String> = fileName.split('.')

    if (!fileNameAndExtentionArr[0]) {
        return res.status(400).send('Invalid fileName.')
    }

    if (!fileNameAndExtentionArr[1]) {
        return res.status(400).send('Please provide image type also.')
    }

    if (
        fileNameAndExtentionArr[1] &&
        fileNameAndExtentionArr[1].toUpperCase() !== 'JPG'
    ) {
        return res.status(400).send('Invalid image type. We accept only jpg')
    }

    if (
        fileNameAndExtentionArr[1] &&
        fileNameAndExtentionArr[1].toUpperCase() === 'JPG'
    ) {
        if (!width && !height) {
            return next()
        }
        if (
            Number.isNaN(parseInt(width)) ||
            Number.isNaN(parseInt(height)) ||
            Number(width) <= 0 ||
            Number(height) <= 0
        ) {
            return res
                .status(400)
                .send('Try again with valid width and height.')
        }
    }
    next()
}

export default handleImageValidation
