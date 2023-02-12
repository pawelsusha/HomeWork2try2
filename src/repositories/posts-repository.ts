import {Request, Response} from "express";
import {postsRouter} from "../routes/posts-router";

const posts = [
    {
        id: 1,
        title: "string",
        shortDescription: "string",
        content: "string",
        blogId: "string",
        blogName: "string"
    },
    {
        id: 2,
        title: "string",
        shortDescription: "string",
        content: "string",
        blogId: "string",
        blogName: "string"
    }
    ,{
        id: 3,
        title: "string",
        shortDescription: "string",
        content: "string",
        blogId: "string",
        blogName: "string"
    }
]

export const postsRepository = {
    findPosts(title: string | null | undefined) {
        if (title) {
            let filteredPosts = (posts.filter(p => p.title.indexOf(title) > -1))
            return filteredPosts
        } else {
            return posts
        }
    },
    getPostById(id: number) {
        let post = posts.find(p =>p.id === id)
        return post;

    },
    createPost(title: string) {
        const newPost = {
            id: +(new Date()),
            title: title,
            shortDescription: "string",
            content: "string",
            blogId: "string",
            blogName: "string"
        }
        posts.push(newPost)
        return newPost
    },
    updatePost(id: number, title: string) {
        let post = posts.find(p => p.id === id)
        if (post) {
            post.title = title
            return true;
        } else {
            return false;
        }
    },
    deletePost(id: number) {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].id === id) {
                posts.splice(i, 1);
                return true;
            }
        }
        return false
    }


}
