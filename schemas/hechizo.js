var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var HechizoSchema = new mongoose.Schema({

  nombre:String,
  dificultad:String,
  tiempo:String,
});

HechizoSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Hechizo', HechizoSchema);
