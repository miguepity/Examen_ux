var hechizo = require('../schemas/hechizo');
var mongoose = require('mongoose');
var SHA3 = require("crypto-js/sha3");
var boom = require("boom");

exports.createHechizero = {
  handler: function(request, reply){
    var hechizos = new hechizo({
        nombre:request.payload.nombre,
        dificultad: request.payload.dificultad,
        tiempo: request.payload.tiempo,
    });
    hechizos.save(function(err){
      if(!err){
        return reply({
          success: true
        })
      }else{
        return reply({
          success: false
        })
      }
    });
  }
}

exports.getHechizo = {
  handler: function(request, reply){
    var hechizos = hechizo.find({nombre: request.params.nombre});
    reply(hechizo);
  }
}

exports.updateHechizo = {
  handler: function(request, reply){
    hechizo.update({nombre: request.params.nombre},
      {$set:
        {
          nombre:request.payload.nombre,
          dificultad: request.payload.dificultad,
          tiempo: request.payload.tiempo,

        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Hechizo no encontrado'));
        }else{
          return reply('Actualizado con exito!!');
        }
      }
    );
  }
}

exports.deleteHechizo = {
  handler: function(request, reply){
    hechizo.find({nombre: request.params.nombre}).remove().exec();
    return reply('Hechizo borrado con exito!!');
  }
}

exports.getAllHechizo = {
  handler: function(request, reply){
    var hechizo = hechizo.find({});
    reply(hechizo);
  }
}
