import BLE from './script/BLE';
import Utils from './script/Utils';

let connected = false

function connectBLE() {
  let juicer = new BLE();
  connected = true
  alert('Juicer connected');
  console.log(connected);
}

function turnOn() {
  // see task.js
}

function turnOff() {

}

// more
