const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
   name: {
    type: String,
    required: true
   },
   price: {
    type: Number,
    required: true
   },
   taste: {
    type: String
   },
   ingredients: {
    type: String,
    enum: ['Chicken wings', 'spicy', 'sauce']
   },
   num_sales: {
    type: Number,
    required: true
   }
});

const MenuDetails = mongoose.model('Menu', menuSchema);
module.exports = MenuDetails;
