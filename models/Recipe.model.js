const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let today = new Date();

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ['Easy Peasy', 'Amateur Chef', 'UltrPro Chef'],
    required: true
  },
  ingredients: {
    type: [String]
  },
  cuisine: {
    type: String,
    required: true
  },
  dishType: {
    type: String,
    enum: [
      'breakfast',
      'main_course',
      'soup',
      'snack',
      'drink',
      'dessert',
      'other'
    ]
  },
  image: {
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg'
  },
  duration: {
    type: Number,
    min: 0
  },
  creator: {
    type: String
  },
  created: {
    type: Date,
    default: today
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
