
import express, { Application, NextFunction, Request, Response } from 'express'
import { todosRoute } from './app/todos/todos.route'
const app:Application = express()


app.use(express.json())

app.use('/todos',todosRoute)


app.get('/', (req:Request, res:Response, next:NextFunction) => {
  

  try {
    console.log(sometion)
    
  } catch (error) {
    next(error);

  }
})

app.use((req,res,next)=>{
  res.status(404).json({
    message:"Route Not Found",
    
  })
})


app.use((error:any, req:Request, res:Response,next:NextFunction)=>{

  if(error){
    res.status(400).json({
      message:"Somethings went wrong on the Global error",
      
    })
  }
})


export default app;