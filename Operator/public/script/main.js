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
  constructor() {
    this.state = {
      juicer = props.juicer
    };

  self.state.juicer.pump(999999);
}

function turnOff() {
  constructor() {
    this.state = {
      juicer = props.juicer
    };

  self.state.juicer.pump(1);
}

// more
