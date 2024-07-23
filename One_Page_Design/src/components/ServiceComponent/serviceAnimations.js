import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function runAnimations() {
    
    const animateElement = (selector, offsetY) => {
        const elements = document.querySelectorAll(selector);
            elements.forEach((element) => {
                gsap.fromTo(element.children, {y: offsetY, opacity: 0},
                {y: "0", opacity: 1, stagger: .1, duration: .5, visibility:"visible", ease: "easeInOut", 
                scrollTrigger: {
                    trigger: element,
                    start: "top 90%",
                    //markers: true,
                    scrub: false,
                    //toggleActions: 'play reverse play reverse',
                }});
            });
        };

        animateElement('.service', '+=30');
}