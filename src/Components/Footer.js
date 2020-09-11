import React from 'react'
import logo from '../Assets/Images/logo.png'
import './Footer.css'
import twi from '../Assets/Images/008-twitter.png'
import ins from '../Assets/Images/029-instagram.png'
import fab from '../Assets/Images/036-facebook.png'
import lin from '../Assets/Images/027-linkedin.png'
export default function Footer() {
    return (
        <div className="footer" id="contact-us">
            <img src={logo} alt="logo" className="f-logo"/>
            <h6 className="mt-4 mb-2 f-h6">186, Awolowo Road, Ikoyi - Lagos</h6>
            <h4 className="f-h4">08164930252 | 08142703957</h4>
            <h5 className="f-info">info@donnettebdc.com</h5>
            <img className="mx-4 f-img" src={twi} alt="twitter"/>
            <img className="mx-4 f-img" src={ins} alt="twitter"/>
            <img className="mx-4 f-img" src={fab} alt="twitter"/>
            <img className="mx-4 f-img" src={lin} alt="twitter"/>  
            <hr style={{background: '#D8D8D8', marginBottom: '1.2rem'}}/>
            <a className="mx-2 ft" href='/'>Home</a>
            <a className="mx-2 ft" href='/'>Our Services</a>
            <a className="mx-2 ft" href='/'>Pre-Order Online</a>
            <a className="mx-2 ft" href='/'>News</a>
            <a className="mx-2 ft" href='/'>FAQs</a>
            <a className="mx-2 ft" href='/'>Terms & Conditions</a>
            <a className="mx-2 ft" href='/'>Privacy Policy</a>
            <a className="mx-2 ft" href='/'>Contact Us</a>
            <a className="ft" href='/' style={{border: 'none'}}>About Us</a>
            <hr style={{background: '#D8D8D8', marginTop: '1.2rem'}}/>   
            <p className="p-don">Donnette BDC Ltd. All Rights Reserved. © 2019</p>  
         </div>
    )
}
