const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
const cookieParser = require('cookie-parser')


app.use(express.json());
app.use(cookieParser());


const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.json({msg:'This is example..'})
})
app.listen(port, () => {
    console.log("Server is listening....")
})

// Routes
app.use('/user', require('./routes/userRouter'))

// connect mongodb
const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then(() => {
    console.log("Connected to MongoDB")
}).catch(err => {
    console.log(err)
})