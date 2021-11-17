const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

// Add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use(`/pizzas`, pizzaRoutes);

module.exports = router;