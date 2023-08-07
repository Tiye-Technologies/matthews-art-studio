(function($){
    // Initialize Glightbox
    const glightbox = GLightbox({
        selector: '.glightbox'
    });

    // Initialize AOS
    AOS.init();

    // Back to top button
    $('.back-to-top').click(function(){
        $("html, body").animate({ scrollTop: "0" });
        return false;
    });

    // Preloader
    let preloader =  $('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
        preloader.remove()
        });
    }
    // Navigation hamburger
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", ()=> {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=> {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

    // Header on scroll
    const header = document.querySelector("#header");
    if(header) {
        window.onscroll = () => {
            if(scrollY > 100){
                header.classList.add("active");
            }
            else{
                header.classList.remove("active");
            }
        }
    }
    

})(jQuery);