const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let path = require('path');
const Pool = require('pg').Pool;


app.use(bodyParser.json());
app.set("view options", {layout: false});
app.use(express.static(__dirname + '/public'));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);


const pool = new Pool({
    //TODO create your own local DB
    user: 'oryjwckzpqyjem',
    host: 'ec2-54-228-243-238.eu-west-1.compute.amazonaws.com',
    database: 'd3468ngh11a1g1',
    password: 'a18ebd912122e4b42e4a2e24de91775a51da0b977ba499f02c6b077387b5b5aa',
    port: 5432,
});


const createUser = (request, response) => {
    const {name, password} = request.body;
    pool.query('INSERT INTO public."users" VALUES ($1, $2)', [name, password], (error) => {
        if (error) {
            throw error
        }
    });
    response.status(201).redirect(__dirname + 'next.html')
};


const getUsers = (request, response) => {
    pool.query('SELECT * FROM public."users"', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(results.rows);
    });
};


app.get('/Home', function (req, resp) {
    resp.status(200).sendFile('next.html');
});

app.post('/user', createUser);
app.get('/users', getUsers);
app.listen(process.env.PORT);