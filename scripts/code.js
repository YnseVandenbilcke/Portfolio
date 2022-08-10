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

const pullseCircles = (frontendCircle, reactCircle, phpCircle, pyhtonCircle) => {
  let circleArray = [frontendCircle, reactCircle, phpCircle, pyhtonCircle];
  for(const circle of circleArray){
    setInterval(function(){
      circle.classList.toggle('pulsate-fwd');
    }, 2000)
  }
}

const listenToCircles = (frontendCircle, reactCircle, phpCircle, pythonCircle) => {
  let circleArray = [frontendCircle, reactCircle, phpCircle, pythonCircle];
  for(const circle of circleArray){
    circle.addEventListener('click', function(){
      circleClick(circle);
    })
  }
}

const circleClick = (circle) => {
  switch(circle.className){
    case "c-skills__frontend_circle":
      window.location.href = "https://github.com/YnseVandenbilcke/Spotify-Remake";
      break;
    case "c-skills__react_circle":
      window.location.href = "https://github.com/YnseVandenbilcke/Instagram-Remake";
      break;
    case "c-skills__php_circle":
      window.location.href = "https://github.com/YnseVandenbilcke/Trello-Remake";
      break;
    case "c-skills__python_circle":
      window.location.href = "https://github.com/YnseVandenbilcke?tab=repositories";
      break;
  }
}

const closeModal = () => {
  let closeButton = document.querySelector('.c-skills__close');
  let modalImage = document.querySelector('.c-skills__modal-content');
  closeButton.addEventListener('click', function(){
    document.querySelector('.c-skills__modal').style.display = "none";
    modalImage.innerHTML = `<img src="" alt="">`;
  })
}


const openMenu = () => {
  document.querySelector('.c-nav__overlay').style.height = "100%";
}

const closeMenu = () => {
  document.querySelector('.c-nav__overlay').style.height = "0%";
}

const setMap = () => {
  let map = L.map('map').setView([50.851250, 2.884190], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);
  let marker = L.marker([50.851250, 2.884190]).addTo(map);
  marker.bindPopup("<b>Ynse Vandenbilcke</b><br>Ypres, Belgium<br>@: ynse.vandenbilcke@icloud.com").openPopup();
}

const init = () => {
  window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  }
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
    if(window.mobileCheck()){
      loadAllCircles();
      pullseCircles(document.querySelector('.c-skills__frontend_circle'), document.querySelector('.c-skills__react_circle'), document.querySelector('.c-skills__php_circle'), document.querySelector('.c-skills__python_circle'));
      listenToCircles(document.querySelector('.c-skills__frontend_circle'), document.querySelector('.c-skills__react_circle'), document.querySelector('.c-skills__php_circle'), document.querySelector('.c-skills__python_circle'));
      closeModal();
    }
  }
  if(!window.mobileCheck()){
    setMap()
  }
}

document.addEventListener("DOMContentLoaded", init);