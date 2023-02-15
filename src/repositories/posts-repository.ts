import {Request, Response} from "express";
import {postsRouter} from "../routes/posts-router";
import {Post} from "../types/types";

export const posts = [
    {
        id: 1,
        title: "11111",
        shortDescription: "string",
        content: "string",
        blogId: "string",
        blogName: "string",
        createdAt: "string"
    },
    {
        id: 2,
        title: "6666",
        shortDescription: "string",
        content: "string",
        blogId: "string",
        blogName: "string",
        createdAt: "string"
    }
    ,{
        id: 3,
        title: "6666",
        shortDescription: "string",
        content: "string",
        blogId: "string",
        blogName: "string",
        createdAt: "string"
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
    createPost(post: Post, blogName: string) {
        const newPost = {
            id: +(new Date()),
            title: post.title,
            shortDescription: post.shortDescription,
            content: post.content,
            blogId: post.blogId,
            blogName: blogName,
            createdAt : "" + new Date()
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
