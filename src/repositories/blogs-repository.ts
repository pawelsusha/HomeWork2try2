import {Request, Response} from "express";
import {blogsRouter} from "../routes/blogs-router";
import {posts} from "./posts-repository";
import {Blog} from "../types/types";

export const blogs = [
    {
        id: 1111,
        name: "string",
        description: "string",
        websiteUrl: "string"
    },
    {
        id: 2222,
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
    },
    getBlogsById(id: number) {
        let blog = blogs.find(b => b.id === id)
        if (blog) {
            blog.id = id
            return true;
        } else {
            return false;
        }

    },
    createBLog(name: string) {
        const newBlog = {
            id: +(new Date()),
            name: "string",
            description: "string",
            websiteUrl: "string",
        }
        blogs.push(newBlog)
        return newBlog
    },
    updateBlog(id: number, name: string) {
        let blog = blogs.find(b => b.id === id)
        if (blog) {
            blog.name = name
            return true;
        } else {
            return false;
        }
    },
    deleteBlog(id: number) {
        for (let i = 0; i < blogs.length; i++) {
            if (blogs[i].id === id) {
                blogs.splice(i, 1);
                return true;
            }
        }
        return false
    }
}