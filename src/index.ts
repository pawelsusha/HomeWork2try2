import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import {blogsRouter} from "./routes/blogs-router";
import {postsRouter} from "./routes/posts-router";
const app = express()
const port = 3000
const parserMiddleware = bodyParser({});
app.use(parserMiddleware)



app.use('/blogs', blogsRouter)
app.use('/posts', postsRouter)


app.get('/', (req, res) => {
    res.send('Blog Platform')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

