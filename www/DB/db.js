const mongoose = require('mongoose');
const server=require('../Rest/server')
//const db_url = `mongodb+srv://system:system@cluster0.aykpfqg.mongodb.net/?retryWrites=true&w=majoryit`

const startDB=(app)=>{
     try{
            mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true,useUnifiedTopology: true});
            mongoose.connection.on('error',(err) =>{
                  console.log(err.message);
                  process.exit(1);
            });
            mongoose.connection.on('open',(error)=>{
                  if(error){
                        console.log(error.message);
                        process.exit(1);
                  }else{
                        console.log('Connected to MongoDB');
                        server.startServer(app);
                  }
            });
     }catch(err){
            console.log(err.message);
     }
}

module.exports ={
      startDB:startDB
}