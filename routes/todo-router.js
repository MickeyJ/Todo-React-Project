var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['production']);

router.get('/todos', (req, res, next) =>{
  knex('todos')
    .orderBy('id')
    .then(rows =>{
      res.json(rows);
    })
    .catch(err =>{
      next(new Error(err))
    });
});

router.post('/todos/:name', (req, res, next) =>{
  knex('todos')
    .insert({
      name: req.params.name,
      completed: false
    })
    .then(response => {})
    .catch(err =>{ next(new Error(err)) });
      res.end()
});

router.put('/todos/:id/:is_done', (req, res, next) =>{
  knex('todos')
    .where({id: req.params.id})
    .update({ completed: req.params.is_done })
    .then(response =>{})
    .catch(err =>{ next(new Error(err)) });
      res.end()
});

router.delete('/todos/:id', (req, res, next) =>{
  knex('todos')
    .where('id', req.params.id)
    .del()
    .then(response => {})
    .catch(err =>{ next(new Error(err)) });
      res.end()
});

module.exports = router;