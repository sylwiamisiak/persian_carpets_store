let now = new Date();
    console.log ( now.getDay() );

    let week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
       ];

    console.log ( week [ now.getDay() ]);
      let day = [
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
       ];

    console.log ( day [ now.getDay() ]);

    let Month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dez",
       ];

    console.log ( Month [ now.getMonth() ]);
    result.innerHTML =  "Hello, today is" + '<br>' + week [ now.getDay() ] + ',' + ' ' + day  [ now.getDay() ] + ' ' + Month  [ now.getMonth() ] + ' ' + "2020" ;




var myVideo = document.getElementById("myVideo");
myVideo.width = 420;
myVideo.controls = true;
var button = document.getElementById("button");
function playPause() {
  if (myVideo.paused) {
    myVideo.play();
    myVideo.controls = false;
  }
  else {
    myVideo.pause();
    myVideo.controls = true;
} }
button.addEventListener('click',mute);
function makeBig() {
    myVideo.width = 1000;
}
function mute() {
  if (myVideo.muted) {
    myVideo.muted = false;
  }
  else {
    myvideo.muted = true;
} }
function makeSmall() {
    myVideo.width = 200;
}

function makeNormal() {
    myVideo.width = 420;
}

function mute() {
    myVideo.muted = true;
}

function orangeAmp () {
    myvideo.muted = false;
}


