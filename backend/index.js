const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
// const mongoose = require('mongoose');
const { networkInterfaces } = require('os');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}
var host
for (const [key, value] of Object.entries(results)) {
    
    for (const [key2, value2] of Object.entries(value)) {
        console.log(`${JSON.stringify(value2)}`);
        host=value2
        
    } 
}
app.get('/', (req, res) => {
    res.json({results});
});

require('./app/routes/createaccount.routes.js')(app);
 const employeeRoutes=require('./app/routes/employee.routes')
 const account_mysql=require('./app/routes/account_mysql.route')
 const personaldiary=require('./app/routes/personaldiary.route')
 const contactus=require('./app/routes/contactus.route')
 app.use('/api/v1/employees', employeeRoutes)
 app.use('/api/accounts', account_mysql)
 app.use('/api/personaldiary', personaldiary)
 app.use('/api/contactus', contactus)
const hostname = host
port=3000
// listen for requests
app.listen(3000,hostname, () => {
    console.log(`Server is listening on port http://${hostname}:${port}/`);
});
