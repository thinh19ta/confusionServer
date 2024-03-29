const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Promotions = require('../models/promotions')

const promotionRouter = express.Router()

promotionRouter.use(bodyParser.json())

promotionRouter.route('/:id')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end(`Will send the promotion with ID: ${req.params.id}  to you!`);
    })
    .post((req, res, next) => {
        res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotion');
    })
    .delete((req, res, next) => {
        res.end('Deleting all promotion');
    });



promotionRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the promotion to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotion');
    })
    .delete((req, res, next) => {
        res.end('Deleting all promotion');
    });

module.exports = promotionRouter;
