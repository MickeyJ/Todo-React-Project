var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['production']);

router.get('/todos', function(req, res, next){
  knex.select().table('todos')
    .orderBy('id')
    .then(rows =>{
      res.json(rows);
    })
    .catch(err =>{
      next(new Error(err))
    });
});

router.post('/add/:name', (req, res, next) =>{
  knex('todos')
    .insert({
      name: req.params.name,
      completed: false
    })
    .then(res => {})
    .catch(err =>{ next(new Error(err)) });
      res.redirect('/')
});

router.post('/done/:id/:is_done', (req, res, next) =>{
  knex.table('todos')
    .where({id: req.params.id})
    .update({ completed: req.params.is_done })
    .then(response =>{});
      res.redirect('/')
});

router.post('/delete/:id', (req, res, next) =>{
  knex('todos')
    .where('id', req.params.id)
    .del()
    .then(res => {});
      res.redirect('/')
});

module.exports = router;