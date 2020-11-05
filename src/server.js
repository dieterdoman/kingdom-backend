import axios from 'axios';
import express from 'express';
import bodyParser from 'body-parser';

const app = express()
const port = 3000

app.use(bodyParser.json());

app.post('/facebook_login', (req, res) => {
    const accessToken = req.body.accessToken;
    const userId = req.body.userId;
    axios.get(`https://graph.facebook.com/${userId}?fields=email&access_token=${accessToken}`)
    .then((response) => {
        console.log(response);
    });
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})