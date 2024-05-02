const http = require("http");

const port = 8081;

/*http http methods
>get  :get data from server
>post: sending data to server
>delete:deleting data from serv
>patch:updating certain feilds
>put:full updates
*/
const toDoList = ["Learn", "apply things", "succed"];

http
  .createServer((req, res) => {
    const { method, url } = req;
    if (url === "/toDos") {
      if (method === "GET") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(toDoList.toString());
      } else if (method === "POST") {
        let body = "";
        req
          .on("error", (err) => {
            console.log(err);
          })
          .on("data", (chunk) => {
            body += chunk;
            console.log(chunk);
          })
          .on("end", () => {
            body = JSON.parse(body);
            console.log("data:", body);
          });
      }
      else if (method === "DELETE") {
        let body = "";
        req
          .on("error", (err) => {
            console.error(err);
          })
          .on("data", (chunk) => {
            body += chunk;
          })
          .on("end", () => {
            body = JSON.parse(body);
            let deleteThisItem = body.item;
            for (let i = 0; i < toDoList.length; i++) {
              if (toDoList[i] === deleteThisItem) {
                toDoList.splice(i,1);
                break;
              }
            }
          });
      }

      else {
        res.writeHead(501);
      }
    } else {
      res.writeHead(404);
    }

    // console.log(method,url);
    // res.end();
    // res.writeHead(200,{"content-type":"text/html"});
    // res.write("<h2>hey server started :-) </h2>");
    res.end();
  })
  .listen(port, () => {
    console.log(`nodejs server started running on port ${port}`);
  });
// npm => node package manager (third party  libraries)
// "npmjs.com" =>packages