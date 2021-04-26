const path = require('path')
import { promises as fs, existsSync } from 'fs'
const sharp = require('sharp')

export const imagePath = '../assets/full'
export const processedImagePath = '../assets/processed'

export const findFullImage = async (imageName: String): Promise<boolean> => {
    try {
        const fileData = await fs.open(
            path.join(__dirname, imagePath, imageName),
            'r'
        )
        await fileData.close()
        return true
    } catch (e) {
        return false
    }
}

export const findProcessedImage = async (
    imageName: String
): Promise<boolean> => {
    try {
        const fileData = await fs.open(
            path.join(__dirname, processedImagePath, imageName),
            'r'
        )
        await fileData.close()
        return true
    } catch (e) {
        return false
    }
}

export const createProcessedImage = async (
    fileName: String,
    imageName: String,
    width: String,
    height: String
): Promise<Boolean> => {
    try {
        const imageData = await sharp(path.join(__dirname, imagePath, fileName))
            .resize(width ? Number(width) : 0, height ? Number(height) : 0)
            .toBuffer()
        if (existsSync(path.join(__dirname, processedImagePath))) {
            const fileData = await fs.open(
                path.join(__dirname, processedImagePath, imageName),
                'w+'
            )
            fileData.write(imageData)
            await fileData.close()
            return true
        } else {
            await fs.mkdir(path.join(__dirname, processedImagePath))
            const fileData = await fs.open(
                path.join(__dirname, processedImagePath, imageName),
                'w+'
            )
            fileData.write(imageData)
            await fileData.close()
            return true
        }
    } catch (e) {
        return false
    }
}

export const getProcessedImageName = (
    name: String,
    width: String,
    height: String
): string => {
    return `${width}x${height}${name}`
}
