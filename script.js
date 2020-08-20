var navBar = document.querySelector(".nav-bar");
var arrowButton = document.querySelector("#backToTop");

window.onscroll = function() {navTraker()};

function navTraker() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navBar.style = "box-shadow : 6px 2px 28px -7px rgba(0,0,0,0.7)";
    navBar.style.top = "0";
    arrowButton.style.display = "block";
    
  } else {
    navBar.style = "box-shadow : none";
    navBar.style.top = "20px";
    arrowButton.style.display = "none";
  }
}
arrowButton.addEventListener("click",()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})