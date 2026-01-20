const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user:'root',
    passsword:'',
    database:'amivel_db',
})
app.get('/',(re,res) => {
    return res.json("From Backend Side");
})

app.get('/users' , (req,res)=> {
    const sql ="SELECT * FROM users";
    db.query(sql,(Err,data) =>{
        if(err) return res.json(err);
        return re.json(data)
    })
})

app.listen(8081,()=> {
    console.log("listening");
})