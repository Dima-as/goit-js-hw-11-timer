const refs = {
  field: document.querySelector(".field"),
  daysC: document.querySelector('span[data-value="days"]'),
  hoursC: document.querySelector('span[data-value="hours"]'),
  minsC: document.querySelector('span[data-value="mins"]'),
  secsC: document.querySelector('span[data-value="secs"]'),
};
const {  field, daysC, hoursC, minsC, secsC } = refs;

class Timer {
  constructor(finishDate, markup) {
    this.markup = markup;
    this.finishDate = finishDate;
    this.intID = null;
    this.deltaTime = 0;
  }
  start() {
    this.intID = setInterval(() => {
      let currentTime = Date.now();
      this.deltaTime = this.finishDate - currentTime;

      const days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)));
      const hours = this.pad(
        Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const mins = this.pad(
        Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60))
      );
      const secs = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000));
      this.inserValues(days, hours, mins, secs);
    }, 1000);
  }
  stop() {
    clearInterval(this.intID);
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
  inserValues(d, h, m, s) {
    const { daysC, hoursC, minsC, secsC } = this.markup;
    daysC.textContent = d;
    hoursC.textContent = h;
    minsC.textContent = m;
    secsC.textContent = s;
  }
}

const myTimer = new Timer(new Date(`jan 1, 2022`), {
  daysC,
  hoursC,
  minsC,
  secsC,
});

myTimer.start();
// myTimer.stop()

  
