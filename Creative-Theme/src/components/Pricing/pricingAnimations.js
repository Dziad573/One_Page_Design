import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function runAnimations() {
    const animateElement = (selector) => {
        
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            gsap.fromTo(
                element.children,
                { scale: 0 },
                { 
                    scale: 1,
                    duration: .4,
                    stagger: 0.2,
                    ease: "easeInOut",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 60%",
                        //markers: true,
                        scrub: false,
                        //toggleActions: 'play reverse play reverse',
                    }
                }
            );
        });
    };

    animateElement('.pricingSection');
}