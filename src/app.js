const express=require('express');
const path=require('path');
const app=express();
const port=process.env.PORT || 3000;

// Public static path
const static_path = path.join(__dirname,"../public")

app.use(express.static(static_path))
// Routing

app.get('/',(req,res)=>{
      res.send("Shoaib Akhter")
});

app.get('/about',(req,res)=>{
      res.send("About")
});

app.get('/weather',(req,res)=>{
      res.send("Weature")
});

app.get('*',(req,res)=>{
      res.send("404 error")
});

app.listen(port,()=>{
      console.log(`Listening at ${port}`)
})