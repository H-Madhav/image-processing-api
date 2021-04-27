import { Request, Response } from 'express'
import {
    findFullImage,
    imagePath,
    getProcessedImageName,
    findProcessedImage,
    createProcessedImage,
    processedImagePath,
} from '../helpers/imageHelpers'
const path = require('path')

const handleImageProcessing = async (
    req: Request,
    res: Response,
    next: Function
): Promise<void | Response> => {
    const fileName: String = req.query.fileName as string
    const width: String = req.query.width as string
    const height: String = req.query.height as string
    const flag = await findFullImage(fileName)

    if (flag) {
        if (!width && !height) {
            return res
                .status(200)
                .sendFile(path.join(__dirname, imagePath, fileName))
        } else {
            const processedImageName = getProcessedImageName(
                fileName,
                width,
                height
            )
            const processedImageFlag = await findProcessedImage(
                processedImageName
            )
            if (processedImageFlag) {
                return res
                    .status(200)
                    .sendFile(
                        path.join(
                            __dirname,
                            processedImagePath,
                            processedImageName
                        )
                    )
            } else {
                const isCreated = await createProcessedImage(
                    fileName,
                    processedImageName,
                    width,
                    height
                )
                if (isCreated) {
                    return res
                        .status(200)
                        .sendFile(
                            path.join(
                                __dirname,
                                processedImagePath,
                                processedImageName
                            )
                        )
                } else {
                    return res.status(500).send('Something bad happend')
                }
            }
        }
    }
    return res.status(404).send('Image not found')
}

export default handleImageProcessing
