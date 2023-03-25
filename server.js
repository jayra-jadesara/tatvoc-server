const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

require('dotenv').config({ path: path.join(__dirname, '../server/config.env') });
const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(port + " port, server connected");
});

app.use('/api/v1/page', require('./routes/dataRoutes'));

// app.get('/page', async (req, res) => {
//     const pool = await poolPromise;
//     const data = await pool.query('select * from tblCustomer').then((res) => {
//         return res.recordset;
//     });
//     const data2 = await pool.request().execute('getInvoiceList');
//     console.log(data2);
//     const arr = ["apple", "banana", "fruit"];

//     res.json(data2.recordset);
// })
