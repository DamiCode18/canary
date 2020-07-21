import React from 'react'
import img5 from '../Assets/Images/Path.png'
export default function RateAlert() {
    return (
        <div className="container mt-4">
            <h1 style={{color: '#b2407b', fontWeight: '450'}}>Signup for Rate Alerts</h1>
            <p>Great personalized Rate Alerts to monitor your currency pairs. Everyday, we will send you an email alert. </p>
            <div class="input-group mb-3 rounded-lg">
            <input type="text" class="form-control text-center" placeholder="Enter your email address" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{
                borderTopLeftRadius: '20px',
                borderBottomLeftRadius: '20px',
                borderRight: 'none',
                outline: 'none'}}/>
            <div class="input-group-append" style={{
                borderBottomRightRadius: '20px'}}>
                <span class="input-group-text" id="basic-addon2" style={{borderTopRightRadius: '10px',
                borderBottomRightRadius: '20px',
                borderTopRightRadius: '20px',
                background: 'white',
                borderLeft: 'none',
                outlineColor: '#fff'}}><img src={img5} alt=""/></span>
            </div>
            </div>
        </div>
    )
}
