function displayTime() {
  let datetime = new Date();
  let hrs = datetime.getHours();
  let min = datetime.getMinutes();
  let sec = datetime.getSeconds();
  var session = document.getElementById("session");
  if (hrs >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
}
setInterval(displayTime, 10);
