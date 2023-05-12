import { useState, useEffect } from 'react';

export default function useScroll(scrollPoint){
    const [scrollTop, setScrollTop] = useState(0);
    var scrolled = false 

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Your code that uses the window object goes here
            const handleScroll = (event) => {
                
                    setScrollTop(window.scrollY);
            };
        
                window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }}, []);

    if (scrollTop > scrollPoint){
        scrolled = true
    }
    
    return scrolled;
}