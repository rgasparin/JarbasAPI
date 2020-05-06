const { Router } = require('express');

const ReleController = require('./controllers/ReleController');

const routes = Router();

routes.get('/', ReleController.index);

routes.get('/liga', ReleController.ligaInterruptor);

routes.get('/desliga', ReleController.desligaInterruptor);

module.exports = routes;
