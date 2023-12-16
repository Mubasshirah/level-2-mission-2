"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
app.use(express_1.default.text());
// parser
// middleware
const userRouter = express_1.default.Router();
app.use('/api/v1/users', userRouter);
userRouter.post('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "user created successfully",
        data: user
    });
});
const courseRouter = express_1.default.Router();
app.use('/api/v1/courses', courseRouter);
courseRouter.post('/create-course', (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "course created successfully",
        data: course
    });
});
// middleware
const logger = (req, res, next) => {
    console.log(req.method, req.url, req.hostname);
    next();
};
app.get('/', logger, (req, res) => {
    console.log(req.query);
    res.send('Hello dudebroishgfdf!');
});
// // express error handling
app.get('/', logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(something);
    }
    catch (error) {
        console.log(error);
        next(error);
        // res.status(400).json({
        //     success:false,
        //     message:"failed to get data"
        // })
    }
}));
// // express error handling
app.post('/', logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: "data got"
    });
});
// vul route e gele 
app.use("*", (req, res) => {
    console.log("route not found");
    res.status(400).json({
        success: false,
        message: "route not found"
    });
});
// vul route e gele 
// global error handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "data getting failed"
        });
    }
});
// global error handler
exports.default = app;
