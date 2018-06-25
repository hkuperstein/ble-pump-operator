// import BLE from './scripts/BLE';
// import Utils from './scripts/Utils';

let connected = false
let juicer = []

// creates new class BLE tied to 'juicer'
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
    juicer.pump(999999)
  }
}

function turnOff() {
  if(connected === true) {
    // short duration, essentially turns off pump instantly
    juicer.pump(1)
  }
}

// more
