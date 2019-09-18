var express = require('express');

var cors = require('cors');

var app = express();

app.use(cors());

app.get('/api/employees',(req, res) => {
    res.send([{"Id": 1, "Firstname": "Balaji", "Lastname": "Ravichandran"},
    {"Id": 2, "Firstname": "Bala", "Lastname": "Ra"}]);
});

app.listen(5000);