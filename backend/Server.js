const express = require("express");
const payment = require("./src/routes/payment");
const app=express.Router()
const cors = require("cors")

app.use(cors({
  origin:"http://localhost:5173",
  
  credentials: true, 
}));




app.use(express.json())
app.get("/",(req,res)=>{
  res.send("hello")
})

app.use("/",payment)











app.listen(3000, () => {
  console.log("listenign..........");
});

