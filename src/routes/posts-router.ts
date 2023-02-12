import {Request, Response, Router} from "express";
import {postsRepository} from "../repositories/posts-repository";

export const postsRouter = Router({})


postsRouter.get('/', (req: Request, res: Response) => {
    const foundPosts = postsRepository.findPosts(req.query.title
        ? req.query.toString()
        : null);
    res.send(foundPosts)
})
postsRouter.get('/:id', (req: Request, res: Response) => {
    let post = postsRepository.getPostById(+req.params.id)
    if (post) {
        res.send(post)
    } else {
        res.send(404)
    }
})
postsRouter.post('/', (req: Request, res: Response) => {
    const newPost = postsRepository.createPost(req.body.title)
    res.status(201).send(newPost)
})

postsRouter.put('/:id', (req: Request, res: Response) => {
    const isUpdated = postsRepository.updatePost(+req.params.id, req.body.title)
    if (isUpdated) {
        const post = postsRepository.getPostById(+req.params.id)
        res.send(post)
    } else {
        res.send(404)
    }
})
postsRouter.delete('/:id', (req: Request, res: Response) => {
    const isDeleted = postsRepository.deletePost(+req.params.id)
    if (isDeleted) {
        res.send(204);
    } else {
        res.send(404);
    }
})
