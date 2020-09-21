import React from 'react';
import "../../styles/tailwind.css";
import "./Layout.css";
import image from '../../images/photoMac.png';

function Layout() {
    return (
        <div className="flex items-center md:max-w-4xl ml-auto mr-auto">
            <div className="md:w-2/5 w-4/5 ml-auto mr-auto p-2 md:text-left text-center mt-16 md:mt-0">
                <h1 className="text-3xl font-light mb-10">Build the <span className="text-indigo-600">future</span></h1>
                <p className="text-gray-800 font-hairline md:max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat.</p>
                <div className="flex mt-10 justify-center md:justify-start">
                    <button class="bg-gray-900 hover:bg-blue-700 font-light text-white py-2 px-4 mr-3 rounded">
                        Get Started
                    </button>
                    <button class="bg-gray-400 hover:bg-blue-700 font-light text-gray-800 py-2 px-4 rounded">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="w-3/5 hidden md:flex items-center justify-center h-screen">
                <img src={image} className="w-full mt-auto mb-auto" alt="photo of mac computer"/>
            </div>
        </div>
    );
}

export default Layout;
