
import app from "./app";
import { client } from "./config/mongodb";
import dotenv from 'dotenv';
dotenv.config();



let server;
const port = 3000;






const bootstrap = async () => {
     await client.connect();
     console.log("Connected to MongoDB")
    server = app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

bootstrap();