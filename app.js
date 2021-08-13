const express=require('express');
const Blog=require('./blogs');
const app=express();


// app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");

const mongoose=require('mongoose');

const dburl='mongodb+srv://Abhi_1121:mongo@123@cluster0.mv6ma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dburl,{ useNewUrlParser: true ,useUnifiedTopology:true}).then(function(result){
    app.listen(3000);
    console.log('Connected to Database');
});



app.get('/',(req,res)=>{
    res.setHeader("Content-Type", "text/html");
    res.sendFile('./views/forms.ejs',{root :__dirname});
});

// app.get('/success',(req,res)=>{

    
//     res.setHeader("Content-Type", "text/html");
//      res.sendFile('./message.ejs',{root :__dirname});
//  });





app.post('/blogs',(req,res) =>{
 
 const blog=new Blog(req.body);

 blog.save().then((result) =>{
    console.log(req.body);
    res.render('details.ejs',{data:req.body});
 }
 ).catch((err)=>{
     console.log(err);
 });
});


//  app.get('/details/:id',(req,res)=>{

//     const id=req.params.id;
//     console.log(id);
//     Blog.findById(id).then(result =>{
//     res.render('message',{data : result});
//      });
    
// });

 






//Connect to MongoDB

