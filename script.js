const express = require("express")
const mongodb = require("mongodb")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb:localhost://27017/list')
.then(()=>{
  console.log("Mongodb is connected");
})
.catch((err)=>{
  console.log("Error is occured",err);
})

const schema = new mongoose.scheme({
  name:{
    type:String,
    required:true
  }
})
const collection  = new mongoose.model(schema);

app.get('/', aysnc(req , res) => {
  try{
    const result  = await collection.find()
    res.send(result)
    console.log("Data is fetched");
  }
  catch(err){
    res.send("Error occured")
    console.log("Error occured",err); 
  }
})

app.post('/add-item',async (req,res)=>{
  try{
  const item = await collection.create({name:req.body.name})
  console.log("data is added to database sucessfully");
  }
  catch(err){ 
    console.log("error occured");
    res.send("error occured",err);

  }
})
app.put('/edit-item',async(res,req)=>{
  const id = req.body.id
  const name = req.body.name
  if(!id || !name){
    res.send("No data found"); 
  }
  try{
    const update = await collection.findByIdAndUpdate(id,{name},{new : true})
    console.log("updated sucessfully")
  }
  catch(err){
    console.log("Error occured");
    res.send(err);
  }
})
app.delete('/delete-item/:id',async(req, res)=>{
  const id = req.params.id;
  try{
    const delet = await collection.findByIdAndDelete(id)
    if(!delet){
      console.log("Item found")
    }
    else{
      console.log("Deleted sucessfully");
      res.send("deleted sucessfully")
    }
  }
  catch(err){
    console.log("Error occured")
    res.send(err);
  }
})


















app.listen(3000,()=>{
  console.log("Server is running on port 300");
})
