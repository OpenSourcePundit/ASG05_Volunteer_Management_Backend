

import app from "./app.js";
import connectDB from "./config/data.js";


connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})