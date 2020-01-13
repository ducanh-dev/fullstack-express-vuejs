let personController = require('./controller/person.controller');
const express = require('express');
const router = express.Router();
        router.get('/:id', 'personController.getById');

        router.get('/', );

        router.post('/create', (req, res, next) => {
            res.send('post request');
        });

        router.put('/:id', (req, res, next) => {
            res.send('put request');
        });

        router.delete('/:id', (req, res, next) => {
            res.send('delete request');
        });

module.exports = router;