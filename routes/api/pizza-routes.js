const router = require('express').Router();

const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza, 
    deletePizza
} = require('../../controllers/pizza-controller');

// Seting up GET and POST at /api/pizzas
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

// Set up GET, Update, Delete one at api/pizzas/:id
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

    module.exports = router;