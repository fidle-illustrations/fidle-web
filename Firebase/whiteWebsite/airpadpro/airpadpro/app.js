const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
// const text = intro.querySelector("h1");
const text = intro.querySelector(".full");

//END SECTION
// const section = document.querySelector("section");
// const end = section.querySelector("h1");
// const end = section.querySelector(".full");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();


// setTimeout(function(){
//   document.getElementById('foo').classList.remove('hide');
//  }, 5000);

// For onload things
// function myFunction(){
//   // console.log("Onload");
//   // document.getElementById("foo").style.color = "blue";
//   document.getElementById("foo").style.opacity = "0";
//   document.getElementsByClassName("full").style.opacity="0.5";
// }
//Scenes
let scene = new ScrollMagic.Scene({
  duration: 30000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);
