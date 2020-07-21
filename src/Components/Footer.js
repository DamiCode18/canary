import React from 'react'
import logo from '../Assets/Images/logo.png'
import './Footer.css'
import twi from '../Assets/Images/008-twitter.png'
import ins from '../Assets/Images/029-instagram.png'
import fab from '../Assets/Images/036-facebook.png'
import lin from '../Assets/Images/029-instagram.png'
export default function Footer() {
    return (
        <div className="footer">
            <img src={logo} alt="logo"/>
            <h6 className="mt-4 mb-2" style={{color: '#979797'}}>186, Awolowo Road, Ikoyi - Lagos</h6>
            <h4 style={{color: '#979797'}}>08164930252 | 08142703957</h4>
            <h5>info@donnettebdc.com</h5>
            <img className="mx-4" src={twi} alt="twitter"/>
            <img className="mx-4" src={ins} alt="twitter"/>
            <img className="mx-4" src={fab} alt="twitter"/>
            <img className="mx-4" src={lin} alt="twitter"/>      
         </div>
    )
}
