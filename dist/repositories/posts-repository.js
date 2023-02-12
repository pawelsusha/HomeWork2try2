"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRepository = void 0;
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
    },
    {
        id: 3,
        title: "string",
        shortDescription: "string",
        content: "string",
        blogId: "string",
        blogName: "string"
    }
];
exports.postsRepository = {
    findPosts(title) {
        if (title) {
            let filteredPosts = (posts.filter(p => p.title.indexOf(title) > -1));
            return filteredPosts;
        }
        else {
            return posts;
        }
    },
    getPostById(id) {
        let post = posts.find(p => p.id === id);
        return post;
    },
    createPost(title) {
        const newPost = {
            id: +(new Date()),
            title: title,
            shortDescription: "string",
            content: "string",
            blogId: "string",
            blogName: "string"
        };
        posts.push(newPost);
        return newPost;
    },
    updatePost(id, title) {
        let post = posts.find(p => p.id === id);
        if (post) {
            post.title = title;
            return true;
        }
        else {
            return false;
        }
    },
    deletePost(id) {
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].id === id) {
                posts.splice(i, 1);
                return true;
            }
        }
        return false;
    }
};
