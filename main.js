var http = require("http");
var fs = require("fs");
var data = fs.readFileSync("data.txt");
const express = require('express');
var app = express();
var router = express.Router();
app.set('view engine','html');
app.set('views','./views');
// http.createServer(function(request, response){
// 	response.writeHead(200, {'Content-Type':'text/plain'});
// 	var list = [{
// 		name: "Hulk",
// 		hp: "230",
// 		attack: "55",
// 		speed: "16"
// 	},{
// 		name: "Iron Man",
// 		hp: "140",
// 		attack: "45",
// 		speed: "30"
// 	}]
// 	var resp = JSON.stringify(list);
// 	response.end(data.toString());s
// 	//response.end("/index.html");
// }).listen(8081);
router.get('/index', function(req,res){
	res.render('index');
});

app.listen(4300);

console.log("server started: http://localhost:4300");