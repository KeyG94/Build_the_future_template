import React from 'react';
import "../../styles/tailwind.css";

function Header() {
    return (
        <nav className="pt-2 pb-2 flex sm:justify-around justify-between">
            <span className="font-bold text-2xl text-blue-900 ml-10 md:ml-0">Logo</span>
            {/* hide when display is small */}
             <ul className="hidden md:flex p-1 text-blue-900">
                 <li className="mr-10">Register</li>
                 <li>Login</li>
             </ul>
             <ul className="md:hidden p-1 text-blue-900">
                 <li className="mr-10">Menu</li>
             </ul>

        </nav>
    )
}

export default Header
