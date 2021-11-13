const express = require('express');

const app = express();

app.get('/', (req,res) =>{
    //Ovde se ubacuje JSON podatak
    // let data = [
    //     {
    //         name : "Danilo"
    //     },
    //     {
    //         name : "Ivan"
    //     }
    // ];
    // res.send(data);

    // Ovde se vidi kako moze da se ubaci sam jedan red HTML-a
    // res.send("<h1>Hello again</h1>")

    res.sendFile(__dirname + '/index.html')
})

app.post ('/save', (req, res) =>{
    res.send("Name saved")
})

app.get('/main.css', (req, res) =>{
    res.sendFile(__dirname + "/main.css")
})

app.listen(3000, ()=>{
    console.log('Server start');
})