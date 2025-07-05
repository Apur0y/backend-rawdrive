
import express, {  Request, Response } from 'express'
import app from '../../app';
import { client } from '../../config/mongodb';



export const todosRoute = express.Router();


todosRoute.get("/",(req:Request,res:Response)=>{
    res.send("Todo Was here")
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



todosRoute.delete("/:title",(req:Request,res:Response)=>{
    res.send("Todo Was here")
})




todosRoute.get('/:id',(req:Request,res:Response)=>{

  const result = req.query;
  const params= req.params;
  console.log("My quesry",result)
  console.log("My params",params);

})


export default app;