const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
})




app.listen(3000, ()=>{
    console.log("Server running in port 3000");
})