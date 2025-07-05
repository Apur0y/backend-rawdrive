
import express, {  Request, Response } from 'express'
import app from '../../app';
import { client } from '../../config/mongodb';
import { ObjectId } from 'mongodb';



export const todosRoute = express.Router();
       const db =  client.db("todosDB")
       const collection =  db.collection("todos")


todosRoute.get("/",async(req:Request,res:Response)=>{
    const result=await collection.find({}).toArray();

    res.send(result)
})



todosRoute.post("/create-todo",async(req:Request,res:Response)=>{
    const todo = req.body;
    console.log(todo)
       const db = await client.db("todosDB")
       const result = await db.collection("todos").insertOne(todo)


    res.send(result)
})



todosRoute.put("/update-todo/:title",(req:Request,res:Response)=>{
    res.send("Todo Was here")
})



todosRoute.delete("/delete-todo/:id",async(req:Request,res:Response)=>{

  const {id} =req.params;
    const td=await collection.deleteOne({_id: new ObjectId(id)})
    res.send(td)

})



todosRoute.get('/:id',async(req:Request,res:Response)=>{

  const {id} =req.params;
    const td=await collection.findOne({_id: new ObjectId(id)})
    res.send(td)


})


export default app;