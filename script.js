//Preloader
var overlay = document.querySelector(".overlay");


window.addEventListener('load', function(){
  overlay.style.display = "none";
});
//Preloader

/*
//Popup newsletter
var div = document.querySelector('.popup-msg');
var box = document.querySelector('.popup-box');
var img = document.querySelector('.close-box');

window.addEventListener('load', () =>{
setTimeout(() =>{
  div.classList.add('active');
  box.classList.add('active');
}, 2000);
});


img.addEventListener('click', () =>{
  div.classList.remove('active');
  box.classList.remove('active');

  document.cookie = "OgheneAgba=Ogheneagba.com; max-age=" + 24 * 60 * 60; //1 day = 24 hours = 24*60*60
});

const WebsiteCookie = document.cookie.indexOf("OgheneAgba="); //Create cookie using index.

if (WebsiteCookie != -1) {
  div.style.display = "none";//Auto popup after it has expired.
}else {
  div.style.display = "block";//Auto hide popup after it has expired.
}
//Popup newsletter
*/


//Navigation scroll
window.addEventListener('scroll', () =>{
  if (window.scrollY >= 80) {
      document.querySelector('nav').classList.add('active');
  }else {
    document.querySelector('nav').classList.remove('active');
  }
});




//toggle and sidebar
var toggle = document.querySelector(".btn");
var sidebar = document.querySelector(".sidebar");
var inputCtn = document.querySelector(".input-ctn");


var togglestatus = false;

let click = function(e){
  e.preventDefault();

  if(togglestatus == false) {

    inputCtn.style.transition = "all .1s ease-in-out";
    sidebar.style.width = "30%";

    document.querySelector('.btn').innerHTML = "Close";

    togglestatus = true;


    inputCtn.style.opacity = "1";

  }else if (togglestatus == true) {

    inputCtn.style.transition = "all .2s ease-in-out";
    sidebar.style.width = "8%";
    inputCtn.style.opacity = "0";

    document.querySelector('.btn').innerHTML = "Open";

    togglestatus = false;
  }

}

toggle.onclick = click;

//toggle and sidebar


//update button
var updateBtn =
document.querySelector(".update-btn");



updateBtn.addEventListener('click', function() {

  //form inputs
  var introText =
  document.querySelector(".intro-text").value;
  var introTextColor =
  document.querySelector(".intro-text-color").value;

  var jobText =
  document.querySelector(".jobText").value;
  var jobTextColor =
  document.querySelector(".jobTextColor").value;


  //form outputs
  document.querySelector(".banner p").innerHTML = introText;
  document.querySelector(".banner p").style.color = introTextColor;

  document.querySelector(".banner h1").innerHTML = jobText;
  document.querySelector(".banner h1").style.color = jobTextColor;

});
//update button



//image changer
var bkg1 = document.querySelector(".bkg-1");
var bkg2 = document.querySelector(".bkg-2");
var bkg3 = document.querySelector(".bkg-3");
var bkg4 = document.querySelector(".bkg-4");
var header = document.querySelector(".header");


bkg1.addEventListener('click', function(){
  header.style.backgroundImage = "url('banner/moon.png')";
});
bkg2.addEventListener('click', function(){
  header.style.backgroundImage = "url('banner/lab.jpg')";
});
bkg3.addEventListener('click', function(){
  header.style.backgroundImage = "url('banner/road.jpg')";
});
bkg4.addEventListener('click', function(){
  header.style.backgroundImage = "url('banner/hack.png')";
});
//image changer
