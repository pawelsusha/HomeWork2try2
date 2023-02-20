import {Request, Response, Router} from "express";
import {blogsRepository} from "../repositories/blogs-repository";
import {blogs} from "../repositories/blogs-repository";
import {postsRepository} from "../repositories/posts-repository";
import {Blog} from "../types/types";
import {Post} from "../types/types";
import {authMiddleware} from "../MiddleWares/auth-middleware";
export const blogsRouter = Router({})





blogsRouter.get('/', (req:Request, res: Response ) => {
    const foundedBlogs = blogsRepository.findBlogs(req.query.title
        ?req.query.toString()
        : null);
    res.send(foundedBlogs)
})
.get('/:id', (req:Request, res: Response ) => {
    let blog = blogsRepository.getBlogsById(+req.params.id)
    if (blog) {
        res.send(blog)
    } else {
        res.send(404)
    }
})
.delete('/:id', (req:Request, res: Response) => {
    const id = +req.params.blogId;
    const isDeleted = blogsRepository.deleteBlog(id)
    if (isDeleted){
        res.send(204)
    }else
        res.send(404)
})
.post('/', (req:Request, res:Response) => {
    const newBlog = blogsRepository.createBLog(req.body.title)

    res.status(201).send(newBlog)
})
.put('/', (req:Request, res:Response) => {
    const id = +req.params.id
    const title = req.body.name
    const isUpdated = blogsRepository.updateBlog(id, req.body.name)
    if (isUpdated){
        res.send(204)
    }else
        res.send(404)
})

