// change navber styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0)

})

//  --------show/ hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon

        const icon = faq.querySelector('.faq__icon i');
        if(icon.className == 'uil uil-plus'){
            icon.className = "uil uil-minus";
        }else
        icon.className = "uil uil-plus";
    })
})


// show/hide nav menu-----
const menu =  document.querySelector(".nav_menu");
const menuBtn =  document.querySelector(".open-menu-btn");
const closeBtn =  document.querySelector(".close-menu-btn");


menuBtn.addEventListener('click', ()=>{
     menu.Style.display = "flex";
    closeBtn.Style.display = "inline-block";
    menuBtn.Style.display = "block";

})

// //close nav menu--

const closeNav = () =>{
    menu.Style.display = "none";
    closeBtn.Style.display = "none";
    menuBtn.Style.display = "inline-block";
}
 closeBtn.addEventListener('click', closeNav)
    
