import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function runAnimations() {
    const animateElement = (selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            const targetWidth = element.getAttribute('data-width');
            element.style.width = '0%';

            gsap.fromTo(
                element,
                { width: '0%' },
                { 
                    width: targetWidth,
                    duration: 1.2,
                    ease: "easeInOut",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        //markers: true,
                        scrub: false,
                        //toggleActions: 'play reverse play reverse',
                    }
                }
            );
        });
    };

    animateElement('.statsElementAnimate');
}