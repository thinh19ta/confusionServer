const express = require('express')
const bodyParser = require('body-parser')

const leaderRouter = express.Router()

leaderRouter.use(bodyParser.json())

leaderRouter.route('/:id')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end(`Will send the leader with ID: ${req.params.id}  to you!`);
    })
    .post((req, res, next) => {
        res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /leader');
    })
    .delete((req, res, next) => {
        res.end('Deleting all leader');
    });

    

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the leader to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /leader');
    })
    .delete((req, res, next) => {
        res.end('Deleting all leader');
    });

module.exports = leaderRouter;
