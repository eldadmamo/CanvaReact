const express = require("express")
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const { default: mongoose } = require("mongoose")
const path = require("path")

dotenv.config()
app.use(express.json())

if (process.env.NODE_ENV === 'local'){
    app.use(cors({
        origin: 'http://localhost:5173',
        credentials: true
    }))
 } else {
    app.use(cors({
        credentials: true
    }))
}

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname, "./", "frontend", "dist","index.html"))
    })
}

const dbConnect = async () => {
    try{
        if(process.env.NODE_ENV === 'local'){
            await mongoose.connect(process.env.LOCAL_DB_URL)
            console.log('Local Database Is Connected..')
        } else {
            await mongoose.connect(process.env.MONGODB_URI)
            console.log('Local Database Is Connected..')
        }
    }catch(error){
        console.log('Database connection Failed')
    }
}
dbConnect()

app.use('/api', require('./routes/designRoutes'))
app.use('/api', require('./routes/authRoutes'))

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running in ${PORT}`))
 