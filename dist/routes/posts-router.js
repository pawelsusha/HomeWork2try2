"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRouter = void 0;
const express_1 = require("express");
const posts_repository_1 = require("../repositories/posts-repository");
exports.postsRouter = (0, express_1.Router)({});
exports.postsRouter.get('/', (req, res) => {
    const foundPosts = posts_repository_1.postsRepository.findPosts(req.query.title
        ? req.query.toString()
        : null);
    res.send(foundPosts);
});
exports.postsRouter.get('/:id', (req, res) => {
    let post = posts_repository_1.postsRepository.getPostById(+req.params.id);
    if (post) {
        res.send(post);
    }
    else {
        res.send(404);
    }
});
exports.postsRouter.post('/', (req, res) => {
    const newPost = posts_repository_1.postsRepository.createPost(req.body.title);
    res.status(201).send(newPost);
});
exports.postsRouter.put('/:id', (req, res) => {
    const isUpdated = posts_repository_1.postsRepository.updatePost(+req.params.id, req.body.title);
    if (isUpdated) {
        const post = posts_repository_1.postsRepository.getPostById(+req.params.id);
        res.send(post);
    }
    else {
        res.send(404);
    }
});
exports.postsRouter.delete('/:id', (req, res) => {
    const isDeleted = posts_repository_1.postsRepository.deletePost(+req.params.id);
    if (isDeleted) {
        res.send(204);
    }
    else {
        res.send(404);
    }
});
