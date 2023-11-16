window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

window.addEventListener('DOMContentLoaded', (event) => {

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function debounce(fn, ms = 300) {
      let timeoutId;
      return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(args), ms);
      };
    }
    

    let lastHeight = 0;
    let hideNav = false;
    let isScrolled = false;

    lenis.on('scroll', ({ scroll }) => {
      debounce(() => (lastHeight = scroll))();


      if (lastHeight < scroll && scroll > 160 && !hideNav) {
        document.body.classList.add('hide_header');
        hideNav = true;
      }
      if (lastHeight >= scroll && scroll > 160 && hideNav) {
        document.body.classList.remove('hide_header');
        hideNav = false;
      }

      if (lastHeight < scroll && scroll > 220 && !isScrolled) {
        document.body.classList.add('scrolled');
        isScrolled = true;
      }

      if (lastHeight >= scroll && scroll < 220 && isScrolled) {
        document.body.classList.remove('scrolled');
        isScrolled = false;
      }
    });

    // lenis.on('scroll', (e) => {
    // console.log(e)
    // })

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    AOS.init({
        once: true
    });


    if (window.innerWidth > 992) {

      document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
        everyitem.addEventListener('mouseover', function(e){
    
          let el_link = this.querySelector('a[data-bs-toggle]');
    
          if(el_link != null){
            let nextEl = el_link.nextElementSibling;
            el_link.classList.add('show');
            nextEl.classList.add('show');
          }
    
        });
        everyitem.addEventListener('mouseleave', function(e){
          let el_link = this.querySelector('a[data-bs-toggle]');
    
          if(el_link != null){
            let nextEl = el_link.nextElementSibling;
            el_link.classList.remove('show');
            nextEl.classList.remove('show');
          }
    
    
        })
      });
    
    }
    // var heroTl = gsap.timeline({repeat: 2, repeatDelay: 1});

    const progressBar = document.querySelector('.progress-bar');

    function animateBar() {
        gsap.to(progressBar, {
            left: "120%",
            duration: 2,  // Adjust this as needed
            ease: "none",
            onComplete: resetBar
        });
    }

    function resetBar() {
        gsap.set(progressBar, { opacity: 0, left: "-75%" });
        gsap.to(progressBar, {
            opacity: 1,
            duration: 0.2,  // Adjust this as needed
            onComplete: animateBar
        });
    }

    animateBar();


    const maskeDiv = document.querySelector('.masked-bg');
    const maskeDivM = document.querySelector('.masked-bg-m');

    const animateBackground = () => {
        gsap.to(maskeDiv, {
            backgroundPosition: '-40px 0',
            scrollTrigger: {
                trigger: ".section-4 .row.row-2",
                scrub: true,
                start: 'top top+=500',
                end: '+=500',
                ease: Power2.easeInOut
            }
        });
        gsap.to(maskeDivM, {
            backgroundPosition: '0px -100px',
            scrollTrigger: {
                trigger: ".section-4 .row.row-2",
                scrub: true,
                start: 'top top+=500',
                end: '+=500',
                ease: Power2.easeInOut
            }
        });
    }

    animateBackground();


    const spinnerRow = document.querySelector('.spinnerg');
    
    gsap.to(spinnerRow, {
        rotation: 360,
        duration: 5,  // Duration of one full rotation, adjust as needed
        ease: "none", // Linear rotation
        repeat: -1    // Infinite repetitions
    });
    
    // const intLogos = document.querySelectorAll('.int-logos');

    // gsap.to(intLogos, {
    //     y: "10px",
    //     duration: 2.5,
    //     yoyo:true,  // Duration of one full rotation, adjust as needed
    //     ease: Power2.easeInOut, // Linear rotation
    //     repeat: -1    // Infinite repetitions
    // });

    // gsap.to('.counter-balance', {
    //     scale: "0.95",
    //     duration: 2.5,
    //     yoyo:true,  // Duration of one full rotation, adjust as needed
    //     ease: Power2.easeInOut, // Linear rotation
    //     repeat: -1    // Infinite repetitions
    // });



    if(window.innerWidth < 767){
        var sec9P = `-25px 0px`
    }else{
        var sec9P = `200px 0px`
    }
    gsap.to(".section-9", {
        backgroundPosition: sec9P,
        scrollTrigger: {
          trigger: ".section-9",
          scrub: true,
          ease: Power2.easeInOut
        }
      });

    gsap.to("#logos-container", {
        x: 0,
        y: -40,
        scrollTrigger: {
          trigger: ".section-2",
          scrub: true,
          ease: Power2.easeInOut
        }
      });

    // gsap.to(".video-progress", {
    //     width: "120%",
    //     scrollTrigger: {
    //       trigger: ".below-cta-img",
    //       scrub: true,
    //       ease: Power2.easeInOut
    //     }
    //   });


    gsap.to(".inner-steps", {
        scrollTrigger: {
          trigger: ".inner-steps",
          scrub: true,
          start: "top",
          end: "bottom top",
          // ease: Power2.easeInOut,
          toggleClass: 'enable',
        }
      });

    var stepItem = gsap.utils.toArray('.step-item');

    stepItem.forEach((section) => {
  
        // console.log(section)
        const bar = section.querySelector('.step-barProgress');
        const stepCount = section.querySelector('.step-count');
        const steps = section.querySelector('.step-bg-wrapper');

        gsap.to(section, {
            scrollTrigger: {
              trigger: section,
              scrub: true,
              start: "top",
              toggleClass: 'active',
              // markers: true,
            }
          });
        

        gsap.to(bar, { 
            height: "95%",
            scrollTrigger: {
                trigger: section,
                scrub: true,
                start: 'top',
                ease: Power2.easeInOut
            }
        });
        
      })

});


$( document ).ready(function() {
  $('.row.opt-row .opt-item').hover( 
    function() { 
      var orgSrc = $(this).children('img').attr('src');
      var gifSrc = $(this).children('img').attr('data-h');
      $(this).children('img').attr('src', gifSrc) 
      $(this).children('img').attr('data-h', orgSrc) 
    }, 
    function() { 
      var orgSrc = $(this).children('img').attr('src');
      var gifSrc = $(this).children('img').attr('data-h');
      $(this).children('img').attr('src', gifSrc) 
      $(this).children('img').attr('data-h', orgSrc) 
    } 
  ); 
});