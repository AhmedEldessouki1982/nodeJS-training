const express = require('express'); //importing express
const app = express();  //inilize express and start the service
const port = 3000;

// .get used to make req & res from main server url
// app.get ('/', (req,res)=> {
//     res.send("this responce from (/) url");
// })


// // .get used to make req & responce from a spesfic server url
// app.get('../data/test-users.json', (req,res)=>{
//     res.send("this responce from (/about) url");
// })


//the .use() for telling express to serve a static file
app.use(express.static(__dirname));


app.listen(port, (req,resp) => {
    console.log(`server connection established and running on port ${port}`);
    console.log(`server responce is ${resp}`);
    console.log(`requist to server is ${req}`);
});


