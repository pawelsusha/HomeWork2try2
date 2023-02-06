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

//#1 Delete All Data OK+
app.delete('/testing/all-data', (req:Request, res: Response ) => {
    videosDataBase.splice(0,videosDataBase.length);
    res.send(204);
})
//#2 Delete By ID +
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

//#3 Get All Videos +
app.get('/videos', (req:Request, res: Response ) => {
    res.send(videosDataBase)
    //res.send(200);
})
//#4 Get All Videos by ID +
app.get('/videos/:id', (req:Request, res: Response ) => {
    let video = videosDataBase.find(v =>v.id === +req.params.id)
    if (video) {
        res.send(video)
        } else {
        res.send(404)
    }
})
// #5 Post (create) Videos ?
app.post('/videos', (req: Request, res: Response) => {
    let newVideo = {
        id: +(new Date()),
        title: req.body.title,
        author: req.body.author,
        canBeDownloaded: req.body.canBeDownloaded,
        minAgeRestriction: req.body.minAgeRestriction,
        createdAt: (new Date().toISOString()),
        publicationDate: (new Date(new Date().setDate(new Date().getDate() + 1)).toISOString()),
        availableResolutions: req.body.availableResolutions
    }
    let errors_array = [];
    //start checking
    //title
    if (typeof newVideo?.title !== "string" || newVideo.title.length > 40){
        errors_array.push({message: "error", field: "title"})
    }
    //author
    if (typeof newVideo?.author !== "string" || newVideo.author.length > 20){
        errors_array.push({message: "error", field: "author"})
    }
    //availableResolutions
    if (Array.isArray(newVideo?.availableResolutions)){
        const length = newVideo?.availableResolutions.length
        let checking = newVideo?.availableResolutions.filter(value => {
            return availableResolutions.includes(value)
        })
        if (checking.length < length){
            errors_array.push({message: "error", field: "availableResolutions"})
        }
    } else {
        errors_array.push({message: "error", field: "availableResolutions"})
    }
    //canBeDownloaded
    if (typeof newVideo?.canBeDownloaded !== "boolean"){
        if (newVideo?.canBeDownloaded === undefined){
            newVideo.canBeDownloaded = false;
        } else {
            errors_array.push({message: "error", field: "canBeDownloaded"})
        }
    }
    //minAgeRestriction
    if (newVideo?.minAgeRestriction !== null && typeof newVideo?.minAgeRestriction !== "number"){
        if (newVideo?.minAgeRestriction === undefined){
            newVideo.minAgeRestriction = null
        } else {
            errors_array.push({message: "error", field: "minAgeRestriction"})
        }
    } else if (typeof newVideo?.minAgeRestriction === "number"){
        if (+newVideo?.minAgeRestriction < 1 ||+newVideo?.minAgeRestriction > 18){
            errors_array.push({message: "error", field: "minAgeRestriction"})
        }
    }
    //endpoint
    if (errors_array.length > 0){
        let errorsList = { errorsMessages : errors_array}
        res.status(400).send(errorsList)
    } else {
        videosDataBase.push(newVideo)
        res.status(201).send(newVideo)
    }
})
// #6 PUT (Update) Videos by ID?
app.put('/videos/:id', (req: Request, res: Response) => {
    let newVideo = videosDataBase.find(p => p.id === +req.params.id);
    let index = videosDataBase.findIndex(p => p.id === +req.params.id);
    let errors_array = [];
    //add by value
    if (newVideo){
        newVideo = {...newVideo,...req.body};
        //check for correct data
        //title
        if (typeof newVideo?.title !== "string" || newVideo.title.length > 40){
            errors_array.push({message: "error", field: "title"})
        }
        //author
        if (typeof newVideo?.author !== "string" || newVideo.author.length > 20){
            errors_array.push({message: "error", field: "author"})
        }
        //availableResolutions
        if (Array.isArray(newVideo?.availableResolutions)){
            const length = newVideo?.availableResolutions.length
            let checking = newVideo?.availableResolutions.filter(value => {
                return availableResolutions.includes(value)
            })
            if (checking.length < length){
                errors_array.push({message: "error", field: "availableResolutions"})
            }
        } else {
            errors_array.push({message: "error", field: "availableResolutions"})
        }
        //canBeDownloaded
        if (typeof newVideo?.canBeDownloaded !== "boolean"){
            errors_array.push({message: "error", field: "canBeDownloaded"})
        }
        //minAgeRestriction
        if (newVideo?.minAgeRestriction !== null && typeof newVideo?.minAgeRestriction !== "number"){
            errors_array.push({message: "error", field: "minAgeRestriction"})
        } else if (typeof newVideo?.minAgeRestriction === "number"){
            if (+newVideo?.minAgeRestriction < 1 ||+newVideo?.minAgeRestriction > 18){
                errors_array.push({message: "error", field: "minAgeRestriction"})
            }
        }
        //publicationDate
        if (typeof newVideo?.publicationDate === "string"){
            let r = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
            if (!r.test(newVideo.publicationDate)){
                errors_array.push({message: "error", field: "publicationDate"})
            }
        } else {
            errors_array.push({message: "error", field: "publicationDate"})
        }
        //assigment to variable
        if (errors_array.length > 0){
            let errorsList = { errorsMessages : errors_array}
            res.status(400).send(errorsList)
        } else {
            videosDataBase[index] = newVideo;
            res.send(204)
        }
    } else {
        res.send(404)
    };
})

app.get('/', (req, res) => {
    res.send('Video list Base')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})