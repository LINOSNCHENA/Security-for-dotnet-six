const express = require('express');
const jwt = require('jsonwebtoken');
const cookieparser=require('cookie-parser');

const app = express();
app.use(cookieparser());

let users = { 
    name : "Maxwell", 
    Age : "23"
    } 
      
    app.get('/setuser', (req, res)=>{ 
    res.cookie("userData", users); 
    res.send('user data added to cookie'); 
    }); 
   
    app.get('/getuser', (req, res)=>{ 
   
    res.send(req.cookies); 
    }); 

app.get('/max',(req,res)=>{
 res.json({
     message:'my name is maxwell'
 })
})

app.post('/max/posts', verifyToken, (req, res) => {  
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Post published',
        authData
      });
    }
  });
});

app.post('/max/login', (req, res) => {
  const user = {
    id: 1, 
    username: 'Maxwell',
    email: 'Maxwell@gmail.com'
  }

  jwt.sign({user}, 'secretkey',{expiresIn: '15m' }, (err, token) => {
    res.json({
      token
    });
  });
});

function verifyToken(req, res, next) {
 
  const bearerHeader = req.headers['authorization'];

  if(typeof bearerHeader !== 'undefined') {
  
    const bearer = bearerHeader.split(' ');
   
    const bearerToken = bearer[1];
   
    req.token = bearerToken;
  
    next();
  } else {
   
    res.sendStatus(403);
  }

}

app.listen(5000, () => console.log('Server started'));