//NPM REQUIRES//
var express=require('express');
var bodyParser=require('body-parser');
var fs=require('fs');
var path=require('path');
//DATA REQUIRES//
var tablesData=require("./JSON/tables.js");
var waitlistData=require("./JSON/waitlist.js");
var adminData=require("./JSON/admin.js");
//INITIALIZE VARIABLES//
var app=express();
var PORT=3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.param('name',function(req,res,next,name){
	for(var i=0;i<req.body.length;i++){
		if(req.body[i].name==name){
			console.log(req.body[i])
			thing=req.body[i]
			next();}}})

app.get('/admin', function(req, res){
	res.sendFile(path.join(__dirname + '/admin.html'));});

app.get('/tables', function(req, res){
	res.sendFile(path.join(__dirname + '/tables.html'));});

app.get('/reserve', function(req, res){
	res.sendFile(path.join(__dirname + '/reserve.html'));});

app.use(function(req, res){
	res.sendFile(path.join(__dirname + '/home.html'));});

app.get('/api/tables',function(req,res){
	tablesData=JSON.stringify(tablesData);
	tablesData=JSON.parse(tablesData);
	res.json(tablesData);})

app.get('/api/waitlist',function(req,res){
	waitlistData=JSON.stringify(waitlistData);
	waitlistData=JSON.parse(waitlistData);
	res.json(waitlistData);})

app.get('/api/admin',function(req,res){
	adminData=JSON.stringify(adminData);
	adminData=JSON.parse(adminData);
	res.json(adminData);})

app.post('/api/tables',function(req,res){
	waitlistData=JSON.stringify(waitlistData);
	waitlistData=JSON.parse(waitlistData);
	waitlistData=JSON.stringify(waitlistData);
	waitlistData=JSON.parse(waitlistData);
	if(tablesData.length<3){
		tablesData.push(req.body);
		fs.writeFile('./JSON/tables.js',"module.exports="+JSON.stringify(tablesData),(err)=>{
  			if (err) throw err;})}
	else{waitlistData.push(req.body);}
		fs.writeFile('./JSON/waitlist.js',"module.exports="+JSON.stringify(waitlistData),(err)=>{
  			if (err) throw err;})
	res.end();})

app.post('/api/admin',function(req,res){

})

// Listener
app.listen(PORT, function() {
	console.log('App listening on PORT '+PORT);})