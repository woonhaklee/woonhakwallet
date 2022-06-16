// backend
let express = require('express');
let app = express();
let router = require('./router/main')(app);
let port = process.env.PORT || 3000;

// forontend
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

// sever
let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});
