setInterval(() => {
    let date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime= date.getSeconds();

    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    sRotation = 6*stime;

    hours.style.transform = `rotate(${hrotation}deg)`
    minutes.style.transform = `rotate(${mrotation}deg)`
    seconds.style.transform = `rotate(${sRotation}deg)`
}, 1000);

let nDate= new Date();

let date= document.getElementById('dte');
let month= document.getElementById('month');
let day = document.getElementById('day');

mnth = nDate.getMonth() +1;
dy = nDate.getDate();

month.innerHTML= mnth;
day.innerHTML= dy;

console.log(nDate)
console.log(mnth)

