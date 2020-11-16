import axios from 'axios';
import express from 'express';
import bodyParser from 'body-parser';
import {pool} from './database.js';

const app = express()
const port = 3000

app.use(bodyParser.json());

app.post('/facebook_login', (req, res) => {
    const accessToken = req.body.accessToken;
    const userId = req.body.userId;
    axios.get(`https://graph.facebook.com/${userId}?fields=email&access_token=${accessToken}`)
    .then((response) => {
        if( response && response.data && response.data.email) {
            pool.query(`SELECT * from public."user" where email = '${response.data.email}' limit 1`, (err, res) => {
                if (res && res.rowCount === 0) {
                    pool.query(`INSERT INTO public."user"(email) VALUES ('${response.data.email}')`, (err1, ress1) => {
                    });
                }
            });
        }
    });
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
