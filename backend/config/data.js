import mongoose from "mongoose";

const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database is connected to ${conn.connection.host}`)
        console.log(`mongodb connect to ${conn.connection.host} in ${process.env.NODE_ENV} mode`)
    } catch (error) {
        console.log(`error while connecting to DB: ${error}`)        
    }
}

export default connectDB;