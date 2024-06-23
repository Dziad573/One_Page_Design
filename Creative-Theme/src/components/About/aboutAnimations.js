import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function runAnimations() {

    const animateElement = (selector, offsetX) => {
        const element = document.querySelectorAll(selector);
                gsap.fromTo(element, {x: offsetX, opacity: 0, visibility:"hidden"},
                {x: "0", opacity: 1, stagger: .2, duration: 1, visibility:"visible", ease: "easeInOut", 
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    markers: false,
                    scrub: false
                }});
        };

        animateElement('.elementAnimation', '-=40');

        const animateTitle = (selector) => {
            const element = document.querySelectorAll(selector);
                    gsap.fromTo(element, {opacity: 0},
                    {opacity: 1, stagger: .2, duration: 1, visibility:"visible", ease: "easeInOut", 
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        markers: false,
                        scrub: false
                    }});
            };
            
        animateTitle('.elementAnimationTitle');


}