import { useState, useEffect } from 'react';

export default function useScroll(scrollPoint){
    const [scrollTop, setScrollTop] = useState(0);
    var scrolled = false 

    useEffect(() => {
        const handleScroll = (event) => {
            setScrollTop(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [window.scrollY]);

    if (scrollTop > scrollPoint){
        scrolled = true
    }
    
    return scrolled;
}