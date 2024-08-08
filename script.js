function clock(){
  let hours = document.getElementById('hours');
  let mins = document.getElementById('mins');
  let period = document.getElementById('period');
  let sec = document.getElementById('sec');


let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();


let amPm = h >= 12 ? "PM" : "AM";

if(h > 12){
  h= h -12;
}

h = ( h< 10) ? "0" + h: h;
m = ( m< 10) ? "0" + m: m;
s = ( s <10) ? "0" + s: s;

hours.innerHTML = h;
mins.innerHTML = m;
sec.innerHTML = s;
period.innerHTML = amPm;

};

setInterval(clock, 1000)