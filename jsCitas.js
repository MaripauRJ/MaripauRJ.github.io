let Hour_hand = document.querySelector('.hour_hand');
let Minutes_hand = document.querySelector('.minutes_hand'); 
let seconds_hand = document.querySelector('.seconds_hand'); 
let clock = document.querySelector('.clock');
let interval = setInterval(() => {
    let date = new Date(); 
    let Hour = date.getHours() * 30; //360/12
    let Minutes = date.getMinutes()*6; // 360/60
    let seconds = date.getSeconds()*6; //360/60
  seconds_hand.style.transform = `translate(-50%, -100%) rotate(${seconds}deg)`; 
  Minutes_hand.style.transform = `translate(-50%, -100%) rotate(${Minutes}deg)`; 
  Hour_hand.style.transform = `translate(-50%, -100%) rotate(${Hour + Minutes/ 12 }deg)`;  // Minutes * 60/5  

}, 60);

