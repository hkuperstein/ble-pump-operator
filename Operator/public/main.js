// import BLE from './scripts/BLE';
// import Utils from './scripts/Utils';

let connected = false
let juicer = []

// creates new class BLE tied to 'juicer'
// this connects the BLE - see BLE.js
function connectBLE() {
  juicer = new BLE();
  connected = true
  return juicer
}

// this isn't working because the above command cannot yet complete
// need to actually connect juicer before doing futher work
function turnOn() {
  if(juicer.state.connected === true) { // connected
    // longer than anyone would need to run the pump for
    juicer.pump(999999) // set to 1432 initially - same as trainer
  } else {
    alert('Pump must be connected first!')
    // this alert can become functional
    // reference the juicer prop 'connected' or create one
  }
}

function turnOff() {
  if(juicer.state.connected === true) { // connected
    // short duration, essentially turns off pump instantly
    this.juicer.pump(1)
  } else {
    alert('Pump must be connected first!')
  }
}

function debug() {
  alert('Version 1.0.0')
}
