const express =require("express")
const mongoose =require('mongoose');
const app = express()
const userRouter = require('./routes/user')
const { logReqRes} = require('./middleswares/index')   // by default it will pick index file
const PORT=8000;

//db connection
mongoose.connect('mongodb://127.0.0.1:27017/application-1')
.then(()=> console.log("Mongodb connected"))
.catch((err)=> console.log("Mongo error",err));


app.use(express.urlencoded({extended:false}))
//Routes
app.use(logReqRes("log.txt"))   // custon made middleware
app.use("user",userRouter);  // name of the collection 

app.listen(PORT,()=> console.log("Server started"))