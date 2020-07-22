import React from 'react'
import './Navbar.css'
import logo from '../Assets/Images/logo.png'
export default function Navbar() {
    return (
        <div className="mt-3 container">
            <p className="hid mx-2">186, Awolowo Road, Ikoyi - Lagos <span className="mx-2">info@donnettebdc.com</span><span className="mx-2 p-2" style={{background: '#B2417B', borderRadius: '20px', color: '#fff'}}>08142703957; 08139308681</span></p>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="/"><img className="n-logo" src={logo} alt="logo"/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto" sty>
                    <li class="nav-item active">
                        <a style={{color: '#41A9D4', fontSize: '18px', fontWeight: '490'}} class="nav-link mx-3" href="/">Rate Alerts <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a style={{color: '#41A9D4', fontSize: '18px', fontWeight: '490'}} class="nav-link mx-3" href="/">Our Services</a>
                    </li>
                    <li class="nav-item">
                        <a style={{color: '#41A9D4', fontSize: '18px', fontWeight: '490'}} class="nav-link mx-3" href="/">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn" href="/" style={{color: '#fff', background: '#41A9D4', fontSize: '18px', fontWeight: '490'}}>Pre-Order Forex</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
