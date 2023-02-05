"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'orange' }, { id: 3, title: 'orange3' }];
const addresses = [{ id: 1, value: 'adr1' }, { id: 2, value: 'adr2' }];
const parserMiddleware = (0, body_parser_1.default)({});
app.use(parserMiddleware);
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
const availableResolutions = ["P144", "P240", "P360", "P480", "P720", "P1080", "P1440", "P2160"];
//#1 Delete All Data
app.delete('/testing/all-data', (req, res) => {
    videosDataBase.splice(0, videosDataBase.length);
    res.send(204);
});
//#2 Get All Videos
app.get('/videos', (req, res) => {
    res.send(videosDataBase);
    res.send(200);
});
// #3 Post Videos
app.post('/videos', (req, res) => {
    let newVideo = {
        id: +(new Date()),
        title: req.body.title,
        author: "Waczowski Bros",
        canBeDownloaded: req.body.canBeDownloaded,
        minAgeRestriction: req.body.minAgeRestriction,
        createdAt: req.body.dateTime,
        publicationDate: req.body.publicationDate,
        availableResolutions: req.body.availableResolutions,
    };
    videosDataBase.push(newVideo);
    res.send(201).send(newVideo);
});
app.get('/products', (req, res) => {
    if (req.query.title) {
        let SearchString = req.query.title.toString();
        res.send(products.filter(p => p.title.indexOf(SearchString) > -1));
    }
    else { }
    res.send(products);
});
app.get('/products', (req, res) => {
    if (req.query.title) {
        let SearchString = req.query.title.toString();
        res.send(products.filter(p => p.title.indexOf(SearchString) > -1));
    }
    else { }
    res.send(products);
});
app.get('/products/:id', (req, res) => {
    let product = products.find(p => p.id === +req.params.id);
    if (product) {
        res.send(product);
    }
    else {
        res.send(404);
    }
});
app.put('/products/:id', (req, res) => {
    let product = products.find(p => p.id === +req.params.id);
    if (product) {
        product.title = req.body.title;
        res.send(product);
    }
    else {
        res.send(404);
    }
});
app.delete('/products/:id', (req, res) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1);
            res.send(204);
            return;
        }
    }
    res.send(404);
});
app.get('/addresses', (req, res) => {
    res.send(addresses);
});
app.get('/addresses/:id', (req, res) => {
    let address = addresses.find(p => p.id === +req.params.id);
    if (address) {
        res.send(address);
    }
    else {
        res.send(404);
    }
});
app.get('/', (req, res) => {
    res.send('Video list Base');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
