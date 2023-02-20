import {NextFunction, Request, Response} from "express";


export const basicAuth = require('express-basic-auth')
export const adminAuth = basicAuth({users: { 'admin': 'qwerty' }});
/*
export const authMiddleware = (req:Request, res:Response, next:NextFunction)=>{
    if(req.query.token === '123'){
        next();
    }else {
        res.sendStatus(401)
    }
}
*/