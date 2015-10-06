var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var listenport = '4000';

var app = express();

// configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware

app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'bower_components')));



var toItems = [
				{id:1, name:'Santhosh'},
				{id:2, name:'Bincy'},
				{id:3, name:'Ashin'},
				{id:4, name:'Angel'}
			]; 
console.log(toItems);
app.get('/', function(req, res){
	res.render('index', {
		title : 'My App',
		items : toItems
	});
});

app.post('/add', function(req, res){
	var newItem = req.body.newItem;
	// console.log(newItem);
	toItems.push({
		id: newItem.length+1,
		name: newItem
	})
	res.redirect('/');
});


app.listen(listenport, function(){
	console.log('port running '+listenport);
});