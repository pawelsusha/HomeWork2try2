"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsRouter = void 0;
const express_1 = require("express");
const blogs_repository_1 = require("../repositories/blogs-repository");
exports.blogsRouter = (0, express_1.Router)({});
exports.blogsRouter.get('/', (req, res) => {
    res.send(blogs_repository_1.blogs);
});
exports.blogsRouter.get('/:id', (req, res) => {
    let blog = blogs_repository_1.blogs.find(b => b.id === +req.params.id);
    if (blog) {
        res.send(blog);
    }
    else {
        res.send(404);
    }
});
