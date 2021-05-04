const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

var publicPath = path.join(__dirname, 'public');

router.get("/",function(req,res){
  res.sendFile(path.join(__dirname,"/"));
  //__dirname : It will resolve to your project folder.
});
app.get('/index',function (req,res){
    res.sendFile(publicPath + '/index');
});

app.get('/home',function(req,res){
  res.sendFile(publicPath + '/home.html');
});

app.get('/addfeedback',function(req,res){
  res.sendFile(publicPath + '/addfeedback.html');
});

router.get('/login',function(req,res){
    res.sendFile(publicPath + '/login.html');
  });

router.get('/register',function(req,res){
    res.sendFile(publicPath + '/register.html');
});

router.get('/reviewsubmitted',function(req,res){
    res.sendFile(publicPath + '/reviewsubmitted.html');
  });

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');




