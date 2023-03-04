class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    const intervalId = setInterval(() => {
      this.currentTime++;

      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    const hours = this.currentTime / 60;
    return Math.floor(hours);
  }

  getSeconds() {
    const seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
    clearTimeout(this.currentTime);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const value1 = Math.floor(this.currentTime / 60);
    const value2 = this.currentTime % 60;
    if (value1 && value2 < 10) {
      return `0${value1}:0${value2}`;
    } else {
      return `${value1}:${value2}`;
    }

    //return `${Math.floor(this.currentTime / 60)}:${this.currentTime % 60}`;
  }
}
