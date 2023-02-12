import {Request, Response} from "express";
import {blogsRouter} from "../routes/blogs-router";


const blogs = [
    {
        id: "string",
        name: "string",
        description: "string",
        websiteUrl: "string"
    }
]
export const blogsRepository = {
    findBlogs(name: string | null | undefined) {
        if (name) {
            let filteredBlogs = (blogs.filter(b => b.name.indexOf(name) > -1))
            return filteredBlogs
        } else {
            return blogs
        }
    }

}