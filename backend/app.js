import express from "express";

import { config } from "dotenv";
import cors from "cors"
import helmet from "helmet";



config({path:`backend/config/config.env`})
const app = express();

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


export default app;