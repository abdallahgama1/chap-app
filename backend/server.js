import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js"
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";


const app = express();
const PORT = process.env.PORT || 5000 ;


dotenv.config();

app.use(express.json()); 
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);




// app.get("/",(req,res)=>{
//     // root route http://localhost:5000/
//     res.send(" welcome to the home page ");
// });

app.listen(PORT,()=> {
    connectToMongoDB();
    console.log(`server is runnig on port ${PORT}`);
});
