const router = require('express').Router();

// Set up GET all and POST at /api/pizzas
router
    .route('/')
    .get()
    .post();

// Set up GET on, PUT and DELETE at /api/pizzas/:id
router
    .router('/:id')
    .get()
    .put()
    .delete();

module.exports = router;
