//NPM REQUIRES//
var express=require('express');
var bodyParser=require('body-parser');
var fs=require('fs');
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

app.get('/reserve', function(req, res){
	})

app.get('/tables', function(req, res){
	})

app.get('/admin', function(req, res){
	})

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

})

app.post('/api/waitlist',function(req,res){
	
})

app.post('/api/admin',function(req,res){
	
})

fs.writeFile('./JSON/tables.js',"module.exports="+JSON.stringify(tablesData),(err)=>{
  if (err) throw err;});

// Listener
app.listen(PORT, function() {
	console.log('App listening on PORT '+PORT);})