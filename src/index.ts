const express = require('express')
import routes from './routes/index'
const app = express()
const port = 3002

app.use('/', routes)

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

export default app
