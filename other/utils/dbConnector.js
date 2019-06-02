
const Pool = require('pg').Pool;
exports.pool = new Pool({
    user: 'oryjwckzpqyjem',
    host: 'ec2-54-228-243-238.eu-west-1.compute.amazonaws.com',
    database: 'd3468ngh11a1g1',
    password: 'a18ebd912122e4b42e4a2e24de91775a51da0b977ba499f02c6b077387b5b5aa',
    ssl: true
});
