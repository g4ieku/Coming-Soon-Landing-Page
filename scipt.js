let counteDate = new Date("feb 25, 2026 00:00:00").getTime();

const countDown = () => {
   let now = new Date().getTime();
   let gap = counteDate - now;

   let seconds = 1000;
   let minutes = seconds * 60;
   let hours = minutes * 60;
   let days = hours * 24;

   let d = Math.floor(gap / days);
   let h = Math.floor((gap % days) / hours);
   let m = Math.floor((gap % hours) / minutes);
   let s = Math.floor((gap % minutes) / seconds);

   document.getElementById("day").innerText = d;
   document.getElementById("hour").innerText = h;
   document.getElementById("minute").innerText = m;
   document.getElementById("second").innerText = s;
};

setInterval(countDown, 100);
