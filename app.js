var seconds = 0;
var minutes = 0;
var hour = 0;

var d = new Date();

setInterval(function () {
  d = new Date();
  seconds = d.getSeconds() * 6;
  minutes = d.getMinutes() * 6;
  hour = d.getHours() * 30 + Math.round(minutes / 12);
  document.getElementById('second').style.transform =
    'rotate(' + seconds + 'deg)';
  document.getElementById('minute').style.transform =
    'rotate(' + minutes + 'deg)';
  document.getElementById('hour');
}, 1000);
