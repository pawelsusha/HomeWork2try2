"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postValidationMiddleware = exports.blogValidationMiddleware = exports.inputValidationMiddleWare = exports.findByIdBlogs = void 0;
const blogs_repository_1 = require("../repositories/blogs-repository");
const express_validator_1 = require("express-validator");
const findByIdBlogs = value => {
    let blog = blogs_repository_1.blogsRepository.getBlogsById(value);
    if (!blog) {
        throw new Error('Invalid blogId');
    }
    return true;
};
exports.findByIdBlogs = findByIdBlogs;
const inputValidationMiddleWare = (req, res, next) => {
    const error = (0, express_validator_1.validationResult)(req);
    if (error.isEmpty()) {
        next();
    }
    else {
        res.status(400).send({
            errorsMessages: error.array({ onlyFirstError: true }).map(e => {
                return {
                    message: e.msg,
                    field: e.param
                };
            })
        });
    }
};
exports.inputValidationMiddleWare = inputValidationMiddleWare;
exports.blogValidationMiddleware = [
    (0, express_validator_1.body)('name').trim().isLength({ min: 1, max: 15 }).isString(),
    (0, express_validator_1.body)('description').trim().isLength({ min: 1, max: 500 }).isString(),
    (0, express_validator_1.body)('websiteUrl').trim().isLength({ min: 1, max: 100 }).matches(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/).isString(),
];
exports.postValidationMiddleware = [
    (0, express_validator_1.body)('title').trim().isLength({ min: 1, max: 30 }).isString(),
    (0, express_validator_1.body)('shortDescription').trim().isLength({ min: 1, max: 100 }).isString(),
    (0, express_validator_1.body)('content').trim().isLength({ min: 1, max: 1000 }).isString(),
    //    body('blogId').trim().custom(getBlogsById).isString()
];
