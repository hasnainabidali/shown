window.addEventListener('DOMContentLoaded', (event) => {


    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis()

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

    var heroTl = gsap.timeline({repeat: 2, repeatDelay: 1});

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

    gsap.to(".video-progress", {
        width: "120%",
        scrollTrigger: {
          trigger: ".below-cta-img",
          scrub: true,
          ease: Power2.easeInOut
        }
      });

    var stepItem = gsap.utils.toArray('.step-item');

    stepItem.forEach((section) => {
  
        // console.log(section)
        const bar = section.querySelector('.step-barProgress');
        const stepCount = section.querySelector('.step-count');

        gsap.to(stepCount, { 
            background: "#0188FF",
            scrollTrigger: {
                trigger: section,
                start: 'top top+=500',
                end: '+=500',
                scrub: true,
            }
        });

        gsap.to(bar, { 
            height: "95%",
            scrollTrigger: {
                trigger: section,
                scrub: true,
                start: 'top',
                end: '+=500',
            }
        });
        
      })

});