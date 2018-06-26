class Utils {

  // draw random integer from flat distribution:
  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // draw random integer from exponential distribution:
  static getRandomIntExp(min, max, lambda) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let lmd = lambda;
    let rnd = (-lmd * Math.log(Math.random())) + min;
    if (rnd > max) {
      rnd = max;
    }
    rnd = Math.floor(rnd);
    return rnd;
  }

  // format number to string padded with zeros:
  static padWithZeros(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
  }

  // get a very precice time stamp since the app has been running:
  static getTimeStamp() {
    return performance.now();
  }

  // get the time that has passed since year 1970:
  static getUnixTime() {
    var d = new Date();
    var unixTime = d.getTime();
    return unixTime
  }

  // copy int16 to an array of two bytes:
  static toBytesInt16(num){
    let arr = new ArrayBuffer(2)
    let view = new DataView(arr)
    view.setUint16(0, num);
    arr = new Uint8Array([view.getUint8(1), view.getUint8(0)])
    return arr
  }
}
// export default Utils;
