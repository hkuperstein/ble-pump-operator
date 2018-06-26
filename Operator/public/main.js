// import BLE from './scripts/BLE';
// import Utils from './scripts/Utils';

let connected = false
let juicer = []

// creates new class BLE tied to 'juicer'
// this connects the BLE - see BLE.js
function connectBLE() {
  let juicer = new BLE();
  connected = true
}

// this isn't working because the above command cannot yet complete
// need to actually connect juicer before doing futher work
function turnOn() {
  console.log(juicer);
  if(connected === true) {
    // longer than anyone would need to run the pump for
    juicer.pump(1432) // set to 1432 initially - same as trainer
  } else {
    alert('Pump must be connected first!')
    // this alert can become functional
    // reference the juicer prop 'connected' or create one
  }
}

function turnOff() {
  if(connected === true) {
    // short duration, essentially turns off pump instantly
    juicer.pump(1)
  } else {
    alert('Pump must be connected first!')
  }
}

// more
