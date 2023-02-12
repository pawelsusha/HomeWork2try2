"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsRouter = void 0;
const express_1 = require("express");
exports.blogsRouter = (0, express_1.Router)({});
const blogs = [
    {
        id: 1,
        name: "string",
        description: "string",
        websiteUrl: "string"
    }
];
exports.blogsRouter.get('/', (req, res) => {
    res.send(blogs);
});
exports.blogsRouter.get('/:id', (req, res) => {
    let blog = blogs.find(b => b.id === +req.params.id);
    if (blog) {
        res.send(blog);
    }
    else {
        res.send(404);
    }
});
