"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_route_1 = require("./app/todos/todos.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/todos', todos_route_1.todosRoute);
app.get('/', (req, res, next) => {
    try {
        console.log(sometion);
    }
    catch (error) {
        next(error);
    }
});
app.use((req, res, next) => {
    res.status(404).json({
        message: "Route Not Found",
    });
});
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            message: "Somethings went wrong on the Global error",
        });
    }
});
exports.default = app;
