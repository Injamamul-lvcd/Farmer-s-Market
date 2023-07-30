const http=require('http');


const startServer=(app)=>{
      const server=http.createServer(app);
      server.listen(process.env.REST_PORT);
      server.on('error',(err)=>{
            console.log(err);
      });
      server.on('listening',()=>{
            console.log('server is open in the port ',process.env.REST_PORT);
      });
      server.on('disconnect',()=>{
            console.log('server is disconnected');
      });
};

module.exports={
      startServer:startServer
};