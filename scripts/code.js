let html_index_text, progressbar, html_all_a_tags, html_canvas, html_skills;

const randomNumbers = (min, max) => {
  return (Math.random() * max) + min;
}

let options = {
  textFont: "Public Sans, sans-serif",
  textColour: "#2CFED6",
  textHeight: 18,
  initial: [randomNumbers(0, 0.5), randomNumbers(0, 0.3)],
  noSelect: true,
  depth: 0.4,
  fadeIn: 2000,
  weight: true,
  weightSize: 2.0,
  weelZoom: false,
  zoom: 0.95
}

const listenToMenuButtonOpen = () => {
  let menuButton = document.querySelector('.js-menu_button');
  menuButton.addEventListener('click', openMenu);
}

const listenToMenuButtonClose = () => {
  let menuButton = document.querySelector('.js-menu_button__close');
  menuButton.addEventListener('click', closeMenu);
}

const listenToAllATags = () => {
  for(let tag of html_all_a_tags){
    tag.addEventListener('click', function(){
      loadingScreen(tag.dataset.destination);
    })
  }
}

const circleAnimation = (circle, degrees) => {
  let deg = 1;
  let degIncrease = setInterval(frame, 6);
  function frame(){
    if(deg >= degrees){
      clearInterval(degIncrease);
    } else {
      deg++;
      circle.style.background = `radial-gradient(#202020 50%, transparent 51%), conic-gradient(transparent 0deg ${deg}deg, #3A3A3A ${deg}deg 360deg), conic-gradient(#ee3557 0deg, #ee3557 ${deg}deg, #ee3557 ${deg}deg, #ee3557)`;
    }
  }
}

const loadingScreen = (pathname) => {
  document.querySelector('.c-nav__progress_overlay').style.width = "100%";
  let elem = document.querySelector('.c-progress');
  let width = 1;
  let id = setInterval(frame, 10);
  function frame() {
    if(width >= 100){
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
  window.setTimeout(function(){
    window.location.href = pathname;
  }, 2000);
}

const loadAllCircles = () => {
  setTimeout(function(){
    circleAnimation(document.querySelector('.c-skills__frontend_circle'), 280)
  }, 300);
  setTimeout(function(){
    circleAnimation(document.querySelector('.c-skills__react_circle'), 185)
  }, 600);
  setTimeout(function(){
    circleAnimation(document.querySelector('.c-skills__php_circle'), 255)
  }, 700)
  setTimeout(function(){
    circleAnimation(document.querySelector('.c-skills__python_circle'), 220)
  }, 900)
}

const openMenu = () => {
  document.querySelector('.c-nav__overlay').style.height = "100%";
}

const closeMenu = () => {
  document.querySelector('.c-nav__overlay').style.height = "0%";
}

const init = () => {
  console.log("DOM started");
  html_index_text = document.querySelector('.c-text');
  progressbar = document.querySelector('.c-progress');
  html_all_a_tags = document.querySelectorAll('.js-a');
  html_canvas = document.querySelector('.c-canvas_container'); // Check if we are on index.html
  html_skills = document.querySelector('.c-skills_text'); // Check if we are on skills.html
  listenToMenuButtonOpen();
  listenToMenuButtonClose();
  listenToAllATags();
  if(html_canvas){
    try{
      setTimeout(function(){ // Make it fade in with TagCanvas
        TagCanvas.Start('c-canvas_container_id', '', options);
      }, 2000)
    } catch(e){
      document.querySelector('c-canvas_container').style.display = 'none';
    }
  }
  if(html_skills){
    loadAllCircles();
  }
}

document.addEventListener("DOMContentLoaded", init);