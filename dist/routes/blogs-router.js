"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsRouter = void 0;
const express_1 = require("express");
const blogs_repository_1 = require("../repositories/blogs-repository");
exports.blogsRouter = (0, express_1.Router)({});
exports.blogsRouter.get('/', (req, res) => {
    const foundedBlogs = blogs_repository_1.blogsRepository.findBlogs(req.query.title
        ? req.query.toString()
        : null);
    res.send(foundedBlogs);
})
    .get('/:id', (req, res) => {
    let blog = blogs_repository_1.blogsRepository.getBlogsById(+req.params.id);
    if (blog) {
        res.send(blog);
    }
    else {
        res.send(404);
    }
})
    .delete('/:id', (req, res) => {
    const id = +req.params.blogId;
    const isDeleted = blogs_repository_1.blogsRepository.deleteBlog(id);
    if (isDeleted) {
        res.send(204);
    }
    else
        res.send(404);
})
    .post('/', (req, res) => {
    const newBlog = blogs_repository_1.blogsRepository.createBLog(req.body.title);
    res.status(201).send(newBlog);
})
    .put('/', (req, res) => {
    const id = +req.params.id;
    const title = req.body.name;
    const isUpdated = blogs_repository_1.blogsRepository.updateBlog(id, req.body.name);
    if (isUpdated) {
        res.send(204);
    }
    else
        res.send(404);
});
