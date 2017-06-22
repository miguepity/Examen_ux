var hechizero = require('../schemas/hechizero');
var mongoose = require('mongoose');
var SHA3 = require("crypto-js/sha3");
var boom = require("boom");

exports.createHechizero = {
  handler: function(request, reply){
    var hechizeros = new hechizero({
        nombre:request.payload.nombre,
        username:request.payload.username,
        password:String(SHA3(request.payload.password)),
        ocupacion:request.payload.ocupacion,
        nacimiento:request.payload.nacimiento,
        pais:request.payload.pais,
        creencia:request.payload.creencia,
        hechizos:request.payload.hechizos,
    });
    hechizeros.save(function(err){
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

exports.getHechizero = {
  handler: function(request, reply){
    var hechizeros = hechizero.find({username: request.params.username});
    reply(hechizero);
  }
}

exports.updateHechizero = {
  handler: function(request, reply){
    hechizero.update({username: request.params.username},
      {$set:
        {
          nombre:request.payload.nombre,
          userame:String(SHA3(request.payload.userame)),
          password:request.payload.password,
          ocupacion:request.payload.ocupacion,
          naciminto:request.payload.naciemnto,
          pais:request.payload.pais,
          creencia:request.payload.creencia,
          hechizos:request.payload.hechizos,
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Hechizero no encontrado'));
        }else{
          return reply('Actualizado con exito!!');
        }
      }
    );
  }
}

exports.deleteHechizero = {
  handler: function(request, reply){
    hechizero.find({username: request.params.username}).remove().exec();
    return reply('Hechizero borrado con exito!!');
  }
}

exports.getAllHechizero = {
  handler: function(request, reply){
    var hechizero = hechizero.find({});
    reply(hechizero);
  }
}
