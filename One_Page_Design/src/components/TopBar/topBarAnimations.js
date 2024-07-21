import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function runAnimations() {
    const animateElement = (selector, triggerSelector) => {
        const elements = document.querySelectorAll(selector);
        const triggerElement = document.querySelectorAll(triggerSelector);
        
        elements.forEach((element) => {
            gsap.fromTo(element, 
                { backgroundColor: "transparent" },
                { 
                    backgroundColor: '#00000099', 
                    duration: 0.5, 
                    ease: "easeInOut", 
                    scrollTrigger: {
                        trigger: triggerElement,
                        start: 'top 20%',
                        //markers: true,
                        scrub: false,
                        toggleActions: 'play play play reverse',
                    }
                }
            );
        });
    };

    animateElement('.topBar', '.aboutContent');
}
