"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsRepository = void 0;
const blogs = [
    {
        id: "string",
        name: "string",
        description: "string",
        websiteUrl: "string"
    }
];
exports.blogsRepository = {
    findBlogs(name) {
        if (name) {
            let filteredBlogs = (blogs.filter(b => b.name.indexOf(name) > -1));
            return filteredBlogs;
        }
        else {
            return blogs;
        }
    }
};
