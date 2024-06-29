import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function runAnimations() {
    const animateElement = (selector, offsetY) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            gsap.fromTo(
                element.children,
                { y:offsetY, opacity: 0 },

                { 
                    y: 0,
                    opacity: 1,
                    stagger: .1,
                    duration: 1.2,
                    ease: "easeInOut",
                    scrollTrigger: {
                        trigger: element.children,
                        start: "top 80%",
                        //markers: true,
                        scrub: false,
                    }
                }
            );
        });
    };

    animateElement('.teamElementAnimate', '+10px');
}
