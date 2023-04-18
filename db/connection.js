const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://samoo:samoo@cluster0.p44ogz4.mongodb.net/?retryWrites=true&w=majority",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection is successfull with DataBase");
}).catch((err)=>{
    console.log("no connection with DataBase check your connection with monogoDB");
}) 
    