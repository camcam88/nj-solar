import React from 'react';
import { Link } from "gatsby"

import './menu.css'
import { useState, useEffect } from 'react';

function Menu(){
    const [hidden, setHidden] = useState(true)


    const handleClick = ()=>{
        setHidden(!hidden)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (!hidden && !event.target.closest('.menuIcon')) {
            setHidden(true);
        }
        };
    
        if (typeof window !== 'undefined') {
            document.addEventListener('click', handleClickOutside);
    
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
        }
    }, [hidden]);

    const MBtn = ()=> {
        return(
        <button onClick={ handleClick } type='button' className="menuIcon">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
        </button>
        )
    }
    const NavLink = ({name, to})=> <Link to={to} className="Link cursor-pointer">{name}</Link>

    return(
        
        <div>
            <MBtn/>
            <div 
            className={hidden? 'hidden' : 'menuLinks'}>
                            <NavLink to='../about' name='About Us'/> 
                            <NavLink to='../area' name='Coverage Area'/> 
                            <NavLink to='../faq' name='FAQ'/> 
            </div>
        </div>
        
    )
}

export default Menu;