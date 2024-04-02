
import express from 'express';
import {config} from "dotenv";
import eventRoutes from "./routes/eventRoutes.js";
import volunteerRoutes from "./routes/volunteerRoutes.js"
import cors from 'cors';
import helmet from 'helmet';
import errorHandler from './middleware/errorHandler.js';
import routeNotFound from './middleware/routeNotFound.js';
import path from "path";
 

config({
    path: "backend/config/config.env",
})

const __dirname = path.resolve();


const app = express();

app.use(cors());
app.use(helmet());


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/volunteers', volunteerRoutes);

app.get('/', ()=>{
    console.log("Express is working!");
})



app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
})






app.use(errorHandler);
app.use(routeNotFound);

export default app;