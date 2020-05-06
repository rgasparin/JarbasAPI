const { onOffRele } = require('../services/gpio') ;

module.exports = {
  index(request, response) {
    return response.send('Hello Worlda!');
  },
  ligaInterruptor(request, response) {
      onOffRele(17, 'high', 0);
      return response.send('ReleAcionado!');
  },
  desligaInterruptor(request, response) {
    onOffRele(17, 'high', 1);
    return response.send('ReleDesligado!');
  },
};
