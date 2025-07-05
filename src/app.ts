
import express, { Application, Request, Response } from 'express'
import { todosRoute } from './app/todos/todos.route'
const app:Application = express()


app.use(express.json())

app.use('/todos',todosRoute)


app.get('/', (req:Request, res:Response) => {
  
  res.send('Hello World! !!Fo fad Got Hou gte ')
})



export default app;