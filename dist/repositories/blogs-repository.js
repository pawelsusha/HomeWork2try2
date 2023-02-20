"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsRepository = exports.blogs = void 0;
exports.blogs = [
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
];
exports.blogsRepository = {
    findBlogs(name) {
        if (name) {
            let filteredBlogs = (exports.blogs.filter(b => b.name.indexOf(name) > -1));
            return filteredBlogs;
        }
        else {
            return exports.blogs;
        }
    },
    getBlogsById(id) {
        let blog = exports.blogs.find(b => b.id === id);
        if (blog) {
            blog.id = id;
            return true;
        }
        else {
            return false;
        }
    },
    createBLog(name) {
        const newBlog = {
            id: +(new Date()),
            name: "string",
            description: "string",
            websiteUrl: "string",
        };
        exports.blogs.push(newBlog);
        return newBlog;
    },
    updateBlog(id, name) {
        let blog = exports.blogs.find(b => b.id === id);
        if (blog) {
            blog.name = name;
            return true;
        }
        else {
            return false;
        }
    },
    deleteBlog(id) {
        for (let i = 0; i < exports.blogs.length; i++) {
            if (exports.blogs[i].id === id) {
                exports.blogs.splice(i, 1);
                return true;
            }
        }
        return false;
    }
};
