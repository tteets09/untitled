
disableScroll();

//After click on continue button. Remove section one.

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

