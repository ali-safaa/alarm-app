let selectMenu = document.querySelectorAll("select");
let h3 = document.querySelector("h3");
let button = document.querySelector("button");
let times = document.querySelector(".times");

let alarmTime;

for (let i = 12; i > 0; i--) {
     i = i < 10 ? "0" + i : i;
     let option = `<option value=${i}>${i}</option>`;
     selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i > 0; i--) {
     i = i < 10 ? "0" + i : i;
     let option = `<option value=${i}>${i}</option>`;
     selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {
     let ampm = i == 1 ? "am" : "pm";
     let option = `<option value=${ampm}>${ampm}</option>`;
     selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

button.addEventListener("click", setAlarm);

function setAlarm() {
     let time = `${selectMenu[0].value}:${selectMenu[1].value}${selectMenu[2].value}`;
     if (
          time.includes("hour") ||
          time.includes("min") ||
          time.includes("am/pm")
     ) {
          return alert("please, select a valid time to set alarm");
     }
     alarmTime = time;
     times.classList.add("hide");
     button.innerText = "clear alarm";
}
setInterval(timer, 1000);

function timer(alarmTime) {
     let date = new Date();
     let h = date.getHours();
     let m = date.getMinutes();
     let s = date.getSeconds();
     let ampm = "am";

     if (h >= 12) {
          h = h - 12;
          ampm = "pm";
     }
     h = h == 0 ? (h = 12) : h;
     h = h < 10 ? "0" + h : h;
     m = m < 10 ? "0" + m : m;
     s = s < 10 ? "0" + s : s;
     h3.innerText = `${h}:${m}:${s}${ampm}`;
     if (alarmTime == `${h}:${m}${ampm}`) {
          console.log("alarm ringing...");
     }
}
