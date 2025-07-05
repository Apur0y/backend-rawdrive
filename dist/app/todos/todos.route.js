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
exports.todosRoute = void 0;
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("../../app"));
const mongodb_1 = require("../../config/mongodb");
const mongodb_2 = require("mongodb");
exports.todosRoute = express_1.default.Router();
const db = mongodb_1.client.db("todosDB");
const collection = db.collection("todos");
exports.todosRoute.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield collection.find({}).toArray();
    res.send(result);
}));
exports.todosRoute.post("/create-todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = req.body;
    console.log(todo);
    const db = yield mongodb_1.client.db("todosDB");
    const result = yield db.collection("todos").insertOne(todo);
    res.send(result);
}));
exports.todosRoute.put("/update-todo/:title", (req, res) => {
    res.send("Todo Was here");
});
exports.todosRoute.delete("/delete-todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const td = yield collection.deleteOne({ _id: new mongodb_2.ObjectId(id) });
    res.send(td);
}));
exports.todosRoute.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const td = yield collection.findOne({ _id: new mongodb_2.ObjectId(id) });
    res.send(td);
}));
exports.default = app_1.default;
