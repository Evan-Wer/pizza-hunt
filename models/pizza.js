const { Schema, model } = require('mongoose');

  const PizzaSchema = new Schema ({
      pizzaName: {
          type: String
      },
      createdBy: {
          type: String
      },
      createdAt: {
          type: Date,
          default: Date.now
      },
      size: {
          type: String,
          ddefault: 'Large'
      },
      toppings: []
  });

// Create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// Export the Pizza model
module.exports = Pizza;