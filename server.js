const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080;

const morgan = require('morgan');
app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views',path.resolve(__dirname,'views'));

app.use('/css',express.static(path.resolve(__dirname,'assets/css')));
app.get('/',(req,res)=>
{
    res.render('index');
})
app.listen(PORT,()=>
{
    console.log(`Listening On Port ${PORT}`);
})