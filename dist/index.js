"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'orange' }];
const addresses = [{ id: 1, value: 'adr1' }, { id: 2, value: 'adr2' }];
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
    res.send('Hello MyProfitBook World!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
