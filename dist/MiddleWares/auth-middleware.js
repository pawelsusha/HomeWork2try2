"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
    if (req.query.token === '123') {
        next();
    }
    else {
        res.sendStatus(401);
    }
};
exports.authMiddleware = authMiddleware;
