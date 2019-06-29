var express = require('express');
const app = express()
const port = 3000
const exphbs = require('express-handlebars');

// Register Handlebars view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// Use Handlebars view engine
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/home', function(req, res, next){
  //get the data dynamically
  res.render('home', data);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
