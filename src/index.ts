import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import {productsRouter} from "./routes/products-router";
import {adressesRouter} from "./routes/adresses-router";
const app = express()
const port = 3000
const parserMiddleware = bodyParser({});
app.use(parserMiddleware)


app.use('/products', productsRouter)
app.use('/adresses', adressesRouter)


app.get('/', (req, res) => {
    res.send('Video list Base')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})