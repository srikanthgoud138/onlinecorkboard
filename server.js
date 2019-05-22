var express=require("express");
var app=express();
var mongodb=require("mongodb");
var path=require("path");
var bodyParser=require('body-parser');
var mong=require('mongoose');



app.use(express.static(path.join(__dirname,'/dist/OnlineCorkBoard/')));
app.use(bodyParser.json());


var dbo;

mongodb.connect("mongodb://srikanthgouda:9966063236a!A@ds247121.mlab.com:47121/onlinecorkboard",(err,db)=>{
    if(err) throw err;
    dbo=db.db('onlinecorkboard');
    console.log("Successfully Connected");
})

app.get('/faculty/notificationsfaculty',function(req,res){

    dbo.collection('batch4').find().toArray(function(err,data){
        if(err) throw err;
        res.send(data);
    })
})
app.get('/students/notificationsstudents',function(req,res){

    dbo.collection('batch4').find().toArray(function(err,data){
        if(err) throw err;
        res.send(data);
    })
})
app.get('/home',function(req,res){

    dbo.collection('batch4').find().toArray(function(err,data){
        if(err) throw err;
        res.send(data);
    })
})

app.post('/home/register',(req,res)=>{

    console.log(req.body);
    dbo.collection('register').insert(req.body,(err,result)=>{

        if(err) throw err;
        console.log(result);

    })
    res.send(JSON.stringify('registered succesfully'))
})

app.post('/home/login',(req,res)=>{

    console.log(req.body);
    var uname=req.body.uname;
    var password=req.body.password;
    
    console.log(uname);
    console.log(password);

    dbo.collection('register').findOne({"uname":uname,"password":password},(err,result)=>{


        if(err) throw err;
        if(result!==null)
        {
            res.send(JSON.stringify('user exists'));
        }
        if(result===null)
        {
            res.send(JSON.stringify('invalid credentials'));
        }
        

    })

})
app.post('/faculty/notificationsfaculty',(req,res)=>{


    console.log(req.body);
    dbo.collection('batch4').insert(req.body,(err,result)=>{


        if(err) throw err;
        dbo.collection('batch4').find().toArray((err,data)=>{


            if(err) throw  err;
            res.send(data);

        })

    })


})

app.delete('/del/:id',(req,res)=>{


    console.log(req.params.id);
    var objid=new mong.Types.ObjectId(req.params.id);
    dbo.collection('batch4').deleteOne({"_id":objid},(err,result)=>{


        if(err) throw err;
        dbo.collection('batch4').find().toArray((err,data)=>{


            if(err) throw err;
            res.send(data);

        })




    })

})

app.put('/faculty/notificationsfaculty',(req,res)=>{


    console.log(req.body);
    var objid=new mong.Types.ObjectId(req.body._id);
    dbo.collection('batch4').update({"_id":objid},{


        "sno":req.body.sno,
        "batch":req.body.batch,
        "name":req.body.name,
        "date":req.body.date

    },(err,result)=>{


        if(err) throw err;
        dbo.collection('batch4').find().toArray((err,data)=>{


            if(err) throw err;
            res.send(data);

        })


    })



})
app.put('/students/updateprofilestudents',(req,res)=>{

    console.log(req.body);
    dbo.collection('register').update({"uname":req.body.uname},{$set:
        {

     


        "fname" : req.body.fname,
        "password" : req.body.password,
        "mobile_number" : req.body.mobile_number

    }
    


    },(err,result)=>{


        if(err) throw err;
        res.send(JSON.stringify('password updated successfully'));

    })
    


})
    





app.listen(4100);