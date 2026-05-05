const express=require("express");
const app=express();
const path=require("path");
const methodoverride=require("method-override");
const {v4:uuidv4}=require("uuid");
const port=8080;
const mysql=require("mysql2");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(methodoverride("_method"));


const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"r1",
    password:"abc@123"
})

app.listen(port,()=>{
    console.log(`your port is  ${port} working now `);
})

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/home/register",(req,res)=>{
    res.render("register.ejs");
})

app.post("/home/register",(req,res)=>{
    let id=uuidv4();
    let  {name,email,phonenumber,password}=req.body;
    let q=`insert into register(id,name,email,phonenumber,password)values (?,?,?,?,?)`;
    try{
        connection.query(q,[id,name,email,phonenumber,password],(err,result)=>{
            if(err) throw err;
            res.redirect("/home/login");
            })
    }
    catch(err){
        console.log(err);
    }
})
app.get("/home/login",(req,res)=>{
    res.render("login.ejs");
})

app.post("/home/login",(req,res)=>{
    let {name,password}=req.body;
    let q=`select * from register where name = ?`;
    connection.query(q,[name],(err,result)=>{
        if(err)throw err;
        let user=result[0];
        if(user.password==password){
           res.render("welcome.ejs",{user});
        }
    })
})

app.get("/home/welcome",(req,res)=>{
   res.render("welcome.ejs");
})
// app.post("/home/login",(req,res)=>{
//     let {name:logname,password:logpassword}=req.body;
//     let q=`select name,password from register`;

//     try{
//         connection.query(q,(err,result)=>{
//             if(err)throw err;
//         })
//     }catch(err){
//         console.log(err);
//     }
// })





// try{
// connection.query("show tables",(err,result)=>{
//     if(err)throw err;
//     console.log("connection created");
// })
// }catch(err){
//     console.log(err);
// }

