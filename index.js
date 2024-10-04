let audio = new Audio("mixkit-warning-alarm-buzzer-991.wav");
let timer_id;
const timer = (time) => {
  // console.log(time)
  timer_id = setTimeout(() => {
    // let audio = new Audio("https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3")
    audio.play();
    // audio.pause()
  }, time);
};

const time_arr = [5, 10, 30, 1, 5, 10, 15, 30, 1];
function setTime(duration) {
  let sec, min, hrs;
  if (duration != 0) {
    sec = duration % 60;
    let left_time = Math.floor(duration / 60);
    if (left_time >= 60) {
      hrs = left_time / 60;
      min = left_time % 60;
    } else {
      hrs = 0;
      min = left_time;
    }
  } else {
    sec = 0;
    hrs = 0;
    min = 0;
  }
  document.getElementById("hours").value = hrs;
  document.getElementById("minutes").value = min;
  document.getElementById("seconds").value = sec;
  document.getElementById("screen").style.display = "block";
  document.getElementById("modal").style.display = "flex";
}

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
  document.getElementById("screen").style.display = "none";
});

document.getElementById("start").addEventListener("click", () => {
  if (
    document.getElementById("hours").value == "" ||
    document.getElementById("minutes").value == "" ||
    document.getElementById("seconds").value == ""
  ) {
    alert("Fill all the fields first...");
  } else {
    let time =
      Number.parseInt(document.getElementById("hours").value) * 60 * 60 +
      Number.parseInt(document.getElementById("minutes").value) * 60 +
      Number.parseInt(document.getElementById("seconds").value);
    timer(time * 1000);
    document.getElementById("modal-box").style.display = "none";
    document.getElementById("modal-box2").style.display = "flex";
  }
});

document.getElementById("stop").addEventListener("click", () => {
    document.getElementById('modal-box').style.display = 'flex'
    document.getElementById('modal-box2').style.display = 'none'
  document.getElementById("modal").style.display = "none";
  document.getElementById("screen").style.display = "none";
  clearTimeout(timer_id);
  audio.pause();
});
