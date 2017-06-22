var hechizeroController = require('./controllers/hechizeroController');
var authController = require('./controllers/authController');


exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API Hechizero, Hechizero')}}},
	{method: 'POST', path: '/hechizero/create', config: hechizeroController.createHechizero},
	{method: 'GET', path: '/hechizero/hechizero/{username}', config: hechizeroController.getHechizero},
  {method: 'PUT', path: '/hechizo/hechizo/{nombre}', config: hechizoController.crearHechizo},
	{method: 'DELETE', path: '/hechizo/modficarhechizo/{nombre}', config: hechizoController.modificarHechizo},
	{method: 'GET', path: '/hechizo/hechizo', config: hechizoController.getAllHechizo},
	{method: 'POST', path: '/hechizero/login', config: authController.login},
	{method: 'GET', path: '/hechizero/logout', config: authController.logout},

];
