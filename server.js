var express=require("express");/*to import library named express,
we are using require function*/
var app=express();

var port=3001;

app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('server started at' + port);