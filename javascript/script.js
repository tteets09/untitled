
const continueLink = document.getElementById("continueLink");
const one = document.getElementById("one");
disableScroll();
//Mobile Navigation Bar
function openNav() {
    document.getElementById("mobNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mobNav").style.width = "0%";
  }

//After click on continue button. Remove section one.
continueLink.addEventListener('click', () => {
    setTimeout(function() {
        one.remove();
        enableScroll()
    }, 800);
});

//Allows links in same page to scroll smoothly to them.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Disabling Scrolling
function disableScroll() { 
    document.body.classList.add("stop-scrolling"); 
} 

//Enable Scrolling
function enableScroll() { 
    document.body.classList.remove("stop-scrolling"); 
} 

