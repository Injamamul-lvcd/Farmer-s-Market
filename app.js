const dotenv=require('dotenv');
dotenv.config();
const express=require('express')
const fs=require('fs')
const path=require('path')
const database=require('./www/DB/db')
const app=express()
app.use(express.json())
app.use(express.urlencoded({ extended: false}))


const routesPath="./src/routes"

fs.readdirSync(routesPath).forEach((file)=>{
      if(~file.indexOf(".js"))
      {
            const routes=require(routesPath+"/"+file);
            routes.setRouter(app)
            console.log("loaded routes")
      }
});

database.startDB(app);
