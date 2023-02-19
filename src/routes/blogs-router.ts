import {Request, Response, Router} from "express";
import {blogsRepository} from "../repositories/blogs-repository";
import {blogs} from "../repositories/blogs-repository";

export const blogsRouter = Router({})

blogsRouter.get('/', (req:Request, res: Response ) => {
    res.send(blogs)
})
blogsRouter.get('/:id', (req:Request, res: Response ) => {
    let blog = blogs.find(b => b.id === +req.params.id)
    if (blog) {
        res.send(blog)
    } else {
        res.send(404)
    }
})

