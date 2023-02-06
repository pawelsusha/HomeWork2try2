import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
const app = express()
const port = 3000

const products = [{id: 1, title:'tomato'},{id: 2, title:'orange'},{id: 3, title:'orange3'}]
const addresses = [{id: 1, value:'adr1'},{id: 2, value:'adr2'}]

const parserMiddleware = bodyParser({});
app.use(parserMiddleware)

const videosDataBase = [
    {
        id: 1,
        title: "MATRIX",
        author: "Waczowski Bros",
        canBeDownloaded: true,
        minAgeRestriction: null,
        createdAt: "2011-05-15T00:00:00.000Z",
        publicationDate: "2011-05-15T08:00:00.000Z",
        availableResolutions: ["P144"],
    },
    {
        id: 2,
        title: "MATRIX2",
        author: "Waczowski Bros",
        canBeDownloaded: true,
        minAgeRestriction: null,
        createdAt: "2012-05-15T00:00:00.000Z",
        publicationDate: "2012-05-15T08:00:00.000Z",
        availableResolutions: ["P144"],
    }
];

const availableResolutions = ["P144", "P240", "P360", "P480", "P720", "P1080", "P1440", "P2160"]

//#1 Delete All Data OK
app.delete('/testing/all-data', (req:Request, res: Response ) => {
    videosDataBase.splice(0,videosDataBase.length);
    res.send(204);
})
//#2 Delete By ID
app.delete('/videos/:id', (req:Request, res: Response ) => {
    for (let i = 0; i < videosDataBase.length; i++) {
        if (videosDataBase[i].id === +req.params.id) {
            videosDataBase.splice(i, 1);
            res.send(204);
            return;
        }
    }
    res.send(404);
})

//#3 Get All Videos ?OK?
app.get('/videos', (req:Request, res: Response ) => {
    res.send(videosDataBase)
    //res.send(200);
})
//#4 Get All Videos by ID ?
app.get('/videos/:id', (req:Request, res: Response ) => {
    let product = products.find(p =>p.id === +req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})
// #4 Post Videos ?
app.post('/videos', (req:Request, res: Response ) => {
    let newVideo = {
        id: +(new Date()),
        title: req.body.title,
        author: "Waczowski Bros",
        canBeDownloaded: req.body.canBeDownloaded,
        minAgeRestriction: req.body.minAgeRestriction,
        createdAt: req.body.dateTime,
        publicationDate: req.body.publicationDate,
        availableResolutions: req.body.availableResolutions,
    }
    videosDataBase.push(newVideo)
    res.send(201).send(newVideo)
})
// #4 PUT Videos by ID?
app.put('/videos/:id', (req:Request, res: Response ) => {
    let product = products.find(p =>p.id === +req.params.id)
    if (product) {
        product.title = req.body.title
        res.send(product)
    } else {
        res.send(404)
    }
})

app.get('/', (req, res) => {
    res.send('Video list Base')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})