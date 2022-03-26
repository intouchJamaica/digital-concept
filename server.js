if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config() 
}


const port = process.env.PORT;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression')
app.use(compression({
    level:6,
    threshold:0,
    filter:(req,res)=>{
        if(req.headers['x-no-compression']){
            return false
        }
        return compression.filter(req,res)
    }    
}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));


app.get('/', (req,res)=>{
    res.render('./index1.ejs')
})

app.get('/2',(req,res)=>{
    res.render('./index2.ejs')
})

app.get('/ourwork', (req,res)=>{
    res.render('./ourwork.ejs')
})

app.listen(port); 
