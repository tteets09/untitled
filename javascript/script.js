
const continueLink = document.getElementById("continueLink");
const one = document.getElementById("one");
disableScroll();

//After click on continue button. Remove section one.
continueLink.addEventListener('click', () => {
    setTimeout(function() {
        one.remove();
    }, 1000);
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
  
function enableScroll() { 
    document.body.classList.remove("stop-scrolling"); 
} 