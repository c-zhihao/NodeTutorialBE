const express = require('express');
const mongoose = require('mongoose');
const staff = require('./routes/staff');

const app = express();

const user = 'torti';
const pw = 'torti123';
const db = 'company';

const dbURI = 'mongodb+srv://' + user + ':' + pw + '@cluster0.dn1sc.mongodb.net/' + db + '?retryWrites=true&w=majority';
console.log(dbURI);
mongoose.connect(dbURI)
    .then((result) => {
        console.log('connected to db!');
        //listen for reuqests
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });

//routes 
app.use('/staff',staff);    

app.use((req, res) => {
    res.send('404 Page not Found');
});
