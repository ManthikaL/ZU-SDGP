import React from 'react'
import "./header.css";
import {Link} from "react-router-dom";
// window.scrollTo(0,document.body.scrollHeight);

export default function Header() {
    return (

        <nav>
            <div className="logo">ASK ME <b>Phone</b></div>
            <div className='link'>
            <ul>
                <li>
                  <Link to ="/Home">Home</Link>
                </li>
                <li>
                <Link to ="/Product">Rating & Review</Link>
                </li>
                <li>
                <Link to ="/About">About Us</Link>
                </li>
            </ul>
                <div className='searchbar'>
            <input type="text" placeholder='Search....'/>
            <button>Search</button>
            </div>
            </div>
        </nav>

    )
}