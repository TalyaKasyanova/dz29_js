function pad(number) {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

const time = {
  hour: 0,
  minute: 0,
  second: 0,

  display() {
    const formattedHour = pad(this.hour);
    const formattedMinute = pad(this.minute);
    const formattedSecond = pad(this.second);
    const timeString = `${formattedHour}:${formattedMinute}:${formattedSecond}`;
    document.getElementById('time').textContent = timeString;
  },

  addSeconds(seconds) {
    const totalSeconds = this.hour * 3600 + this.minute * 60 + this.second + seconds;
    this.hour = Math.floor(totalSeconds / 3600) % 24;
    this.minute = Math.floor(totalSeconds / 60) % 60;
    this.second = totalSeconds % 60;
    this.display();
  },

  addMinutes(minutes) {
    this.addSeconds(minutes * 60);
  },

  addHours(hours) {
    this.addSeconds(hours * 3600);
  }
};

time.display();

function addSeconds() {
  const seconds = parseInt(prompt('Скільки секунд додати?'));
  if (!isNaN(seconds)) {
    time.addSeconds(seconds);
  }
}

function addMinutes() {
  const minutes = parseInt(prompt('Скільки хвилин додати?'));
  if (!isNaN(minutes)) {
    time.addMinutes(minutes);
  }
}

function addHours() {
  const hours = parseInt(prompt('Скільки годин додати?'));
  if (!isNaN(hours)) {
    time.addHours(hours);
  }
}