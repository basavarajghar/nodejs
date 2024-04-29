const http = require("http");

const port = 8081;

http
  .createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h2>hey server started :-) </h2>");
    res.end();
})
.listen(port,()=>{  // call back func
    console.log('nodes server started running on port ${port}');
});

// npm => node package manager (third party  libraries)
// "npmjs.com" =>packages