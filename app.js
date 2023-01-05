/***************************Pratice Problems************************** */

//  1) websockets  - count connections  and disconnected
//  If users connected count will get increase, If users Disconnected count will get decrease..


//2) Testing -- create a function which acceptes two arguments and perform anagram ..
//  example - listen , slient  
// you need to test that function is anagram or not ?


//. 3) Test function that makes api call and send back response -- https://jsonplaceholder.typicode.com/post/1
// this function neeed to take api as argument , function should call that api and send that response back and 
// test that function , whetaher it is doing this job properly.




// 1st problem
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);   // socket can start using server



app.use(express.static(__dirname+"/public"))

io.on("connection",(socket)=>{     // this is check and listen for user connections
    console.log("User connected")
    io.emit("connection")   // after listing connection from client , server need to emit that connection to client

    socket.on("disconnect",()=>{    // socket will listen to an event called disconnected, bascially this socket will contains information which is send by the user
        io.emit("disconnection")
    })  
})


http.listen("8080" , ()=>{
    console.log("Server running on 8080")
})


// 2)Testing for anagram function

function isAnagram(str1,str2){

    if(str1.split("").sort().join("") == str2.split("").sort().join("")){
        return true
    }else{
        return false
    }

}

console.log(isAnagram("listen","silent"))



// 3) Testing API

const axios  = require("axios")

function getData(api){
    return new Promise((resolve,reject)=>{
        axios.get(api)
        .then(res=>{
            resolve(res.data)
        })
    })
}



module.exports = {
    // isAnagram,
    getData
}