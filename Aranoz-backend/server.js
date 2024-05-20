const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
dotenv.config()
app.use(cors())
app.use(express.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const {Schema} = mongoose;
const sofaSchema = new Schema ({
    image : {
        type: String,
        require: true,
    },
    title : {
        type: String,
        require: true,
    },
    price : {
        type: Number,
        require: true,
    }
 })

const Sofa = mongoose.model("Sofa", sofaSchema)

app.post("/sofa" , async(req, res) =>{
    try{
        const {image, title, price} = req.body;
        const sofa = new Sofa ({
            image,
            title,
            price
        })
        await sofa.save()
        res.status(200).send(sofa)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})

app.get ("/sofa" , async(req, res) => {
    try{
        const sofas = await Sofa.find({})
        res.status(200).send(sofas)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})

app.delete("/sofa/:id", async(req, res) =>{
    try{
        const {id} = req.params
        const sofa = await Sofa.findByIdAndDelete(id)
        res.status(200).send(sofa)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})

app.get("/sofa/:id", async(req, res) => {
    try{
        const {id} = req.params
        const sofa = await Sofa.findById(id)
        res.status(200).send(sofa)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})

app.put("/sofa/:id", async(req, res) => {
    try{
        const {id} = req.params
        const {image, title, price} = req.body
        const sofa = await Sofa.findByIdAndUpdate(
            id,
            {
                image,
                title,
                price
            },
            {new: true}
        )
        res.status(200).send(sofa)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})


const PORT = process.env.PORT;
const DB = process.env.DB_URL
mongoose.connect(DB)
  .then(() => console.log('Connected!'));
app.listen(PORT, console.log("Port is up and running on the post", PORT))