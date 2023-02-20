"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuth = exports.basicAuth = void 0;
exports.basicAuth = require('express-basic-auth');
exports.adminAuth = (0, exports.basicAuth)({ users: { 'admin': 'qwerty' } });
/*
export const authMiddleware = (req:Request, res:Response, next:NextFunction)=>{
    if(req.query.token === '123'){
        next();
    }else {
        res.sendStatus(401)
    }
}
*/ 
