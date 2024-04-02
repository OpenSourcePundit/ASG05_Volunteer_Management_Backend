import app from './app.js';
import connectDB from './config/data.js';
const PORT = process.env.PORT || 5000;
connectDB();

app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT} on ${process.env.NODE_ENV} mode`);
})
