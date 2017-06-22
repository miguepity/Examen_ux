var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var HechizeroSchema = new mongoose.Schema({

  nombre:String,
  username : {type: String, unique: true, required: true},
  password:String,
  ocupacion:String,
  nacimiento:String,
  pais:String,
  creencia:String,
  hechizos: [String],
});

HechizeroSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Hechizero', HechizeroSchema);
