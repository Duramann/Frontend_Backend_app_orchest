const PORT = 5000;
const HOST = '0.0.0.0';
const cors = require('cors');

const express = require('express');

const app = express();
app.use(cors());

const session = require('express-session');

    app.use(
        session({
            secret: 'secret string',
            resave: true,
            saveUnitialized: false,
            cookies :{}
        })
    );

    app.get('/', function(req, res) {
        if(!req.session.pageCountcurrent)
            req.session.pageCountcurrent = 0;
        req.session.pageCountcurrent++;
        res.json({
            pageCount: req.session.pageCountcurrent
        });
    });



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);