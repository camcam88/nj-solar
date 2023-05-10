import React from 'react';
import { Link } from "gatsby"

function LinkList(){

    const NavLink = ({name, to})=> <Link to={to} className="cursor-pointer text-xl">{name}</Link>

    return(
        <div className="
                    NavLinks
                    justify-between
                    w-1/4
                    hidden
                    lg:flex
                    ">
                        <NavLink to="/about" name='About Us'/> 
                        <NavLink to="/coverage" name='Coverage Area'/> 
                        <NavLink to="/faq" name='FAQ'/> 
                    </div>
    )
}

export default LinkList;