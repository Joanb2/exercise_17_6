const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('assets'));

app.get('/', function(req, res){
	res.render('auth'); 
});

app.get('/logged', function(req, res){
	const data = {
		name: req.query.name
	}
	res.render('logged', {
		name: data.name
	});
});

app.listen(3000);
app.use(function (req, res, next){
	res.status(404).send('Wybierz coś innego, nie mamy tego co chcesz');
});