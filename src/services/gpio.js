const Gpio = require('onoff').Gpio;

function onOffRele(gpioId, highlow, onoff) {
  const gpio17 = new Gpio(gpioId, highlow);
  try{
    gpio17.writeSync(onoff);
  } catch(e){
    console.log(e);
  }
}

module.exports = {
  onOffRele
};
