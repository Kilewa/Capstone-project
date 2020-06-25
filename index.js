// navigation slide function

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    // toggle Nav
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
       
        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
    
  
        });

        //toggle animation
        burger.classList.toggle('toggle');
    });
    
}
navSlide();

// scroll to top function
const caretScrollToTop = document.querySelector('.scrollToTop');
caretScrollToTop.addEventListener('click', function(){
    //method 1
    // window.scrollTo(0,0);
    //method 2 not compatible to all browsers
    // window.scrollTo({
    //     top: 0,
    //     left: 0,
    //     behavior:'smooth'
    

    //method compatimble to almost all browsers 

    // });
    $(`html, body`).animate({scrollTop: 0}, 'slow');
});
caretScrollToTop ();