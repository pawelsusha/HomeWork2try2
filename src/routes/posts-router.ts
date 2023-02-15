import {Request, Response, Router} from "express";
import {postsRepository} from "../repositories/posts-repository";
//import {body, validationResult} from "express-validator";
//import {Post, Blog} from "../types/types";
import {inputValidationMiddleWare, postValidationMiddleware } from "../MiddleWares/InputValidationMiddleWare"

export const postsRouter = Router({});
export const basicAuth = require('express-basic-auth')
export const adminAuth = basicAuth({users: { 'admin': 'qwerty' }});

//Get All Posts By no auth
postsRouter.get('/', (req: Request, res: Response) => {
    const foundPosts = postsRepository.findPosts(req.query.title
        ? req.query.toString()
        : null);
    res.send(foundPosts)
})
//Get Post By ID no Auth
postsRouter.get('/:id', (req: Request, res: Response) => {
    let post = postsRepository.getPostById(+req.params.id)
    if (post) {
        res.send(post)
    } else {
        res.send(404)
    }
})
//Create Post  + Auth
postsRouter.post('/', adminAuth, postValidationMiddleware, inputValidationMiddleWare, (req: Request, res: Response) => {
    const newPost = postsRepository.createPost(req.body, req.body.blog!.Name)
    res.status(201).send(newPost)
})

//Update Post By ID + Auth
postsRouter.put('/:id', adminAuth, postValidationMiddleware, inputValidationMiddleWare, (req: Request, res: Response) => {
    const isUpdated = postsRepository.updatePost(+req.params.id, req.body)
    if (isUpdated) {
        const post = postsRepository.getPostById(+req.params.id)
        res.send(post)
    } else {
        res.send(404)
    }
})
//Delete Post By ID + Auth
postsRouter.delete('/:id', (req: Request, res: Response) => {
    const isDeleted = postsRepository.deletePost(+req.params.id)
    if (isDeleted) {
        res.send(204);
    } else {
        res.send(404);
    }
})
