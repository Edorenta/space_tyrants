// A very basic web server in node.js

var EventEmitter = require("events").EventEmitter;
var querystr = require("querystring");
var express = require("express");
var socket = require("socket.io");
var http = require("http");
var path = require("path");
var url = require("url");
var fs = require("fs");

var checkMimeType = true;
var send_to;
var params;
var page;

//sets https ssl keys and certificates (for later...)
var options = {
  key: fs.readFileSync("ssl/key.pem"),
  cert: fs.readFileSync("ssl/cert.pem")
};

//create a server class for callback functions?
class WebServer {
	constructor(init_url, init_port){
		//this.app = http.createServer();
		this.app = express();
		this.app.use(express.static(path.join(__dirname, 'public')));
		this.app.set('views', path.join(__dirname, 'views'));
		this.port = init_port;
		this.ip = init_url;
		this.pipe = this.app.listen(this.port, this.ip);
		this.io = socket(this.pipe);
		this.app.set('view engine', 'ejs'); //sets views template engine to EJS
		this.clients = 0;
		console.log("Started web server at " + init_url + ":" + init_port);
	}
	close() {
		console.log("Server stopped");
	}
	index(req, res) {
		res.redirect('/welcome');
		res.render('pages/index');
	}
	welcome(req, res) {
		res.render('pages/index');
	}
	play(req, res) {
		res.render('pages/game');
	}
	about(req, res) {
		res.render('pages/about');
	}
	use(req, res, next){
    	res.setHeader('Content-Type', 'text/plain');
    	res.status(404).send('Page cannot be found!');
//		res.render('pages/err404');
	}
}
//create a client class for callback functions?
class Client {
	constructor(){
		//this.app = new EventEmitter();
		//this.ip = ;
		++server.clients;
		console.log("Welcoming player " + server.clients);
	}
	start() {
		this.score = 0;
		this.life = 3;
		console.log("Good luck!");
	}
	game_over() {
		console.log("You lost! Total score: " + this.score);
	}
}

//client connects to the server
function client_connect() {
	console.log("New connection:\n" + socket.id);
	var client = new Client(++(server.client_count));
	//var game = new EventEmitter();
}
//server instance environment
var server = new WebServer("127.0.0.1", 8080);

//server pages callback functions
server.app.get('/', server.index)
.get('/welcome', server.welcome)
.get('/game', server.play)
.get('/about', server.about)
.use(server.use);

//server sockets callback functions
server.io.sockets.on('connection', client_connect);

//server.app.close();

//game callback functions
//game.on("start", game.start); //game.app.emit("start"); >> triggers start
//game.on("game_over", game.over); //game.app.emit("game_over", score); >> triggers game_over
