var joi = require('joi');
var boom = require('boom');
var hechizero = require('../schemas/hechizero');
var SHA3 = require("crypto-js/sha3");

exports.login = {
    auth: false,
    validate: {
      payload: {
        user: joi.string().required(),
        pass: joi.string().required(),
      }
    },
    handler: function(request, reply) {
      var pass = String(SHA3(request.payload.password));
      hechizero.find({user: request.payload.username, pass: pass}, function(err, hechizero){
          if(!err){
            if(hechizero.length > 0){
              request.cookieAuth.set(hechizero[0]);
              return reply({user: hechizeros[0].username, success:true});
            }
            return reply({message: boom.unauthorized('Wrong email or password'), success:false});
          }
          return reply({ message: boom.notAcceptable('Error Executing Query'), success: false});
      });
    }
};
exports.logout = {
    auth: {
      mode:'required',
      strategy:'session'
    },
    handler: function(request, reply) {
      request.cookieAuth.clear();
      return reply('Logout Successful!');
    }
  };
