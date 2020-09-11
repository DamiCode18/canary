import React from 'react'
import img5 from '../Assets/Images/Path.png'
// import line from '../Assets/Images/Rectangle.png'
export default function RateAlert() {
    return (
        <div className="mt-4" id="rate-alert">
            <h1 className="h1-fnt" style={{color: '#b2407b', fontWeight: '450'}}>Signup for Rate Alerts</h1>
            <p>Great personalized Rate Alerts to monitor your currency pairs. Everyday, we will send you an email alert. </p>
            <div class="input-group mb-3 rounded-lg container" style={{maxwidth: '590px'}}>
            <input type="text" class="form-control text-center" placeholder="Enter your email address" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{
                borderTopLeftRadius: '50px',
                borderBottomLeftRadius: '50px',
                borderRight: 'none',
                outline: 'none', 
                padding: '30px'}}
                />
            <div class="input-group-append" style={{
                borderBottomRightRadius: '50px'}}>
                <span class="input-group-text" id="basic-addon2" style={{borderTopRightRadius: '50px',
                borderBottomRightRadius: '50px',
                borderTopRightRadius: '50px',
                background: 'white',
                borderLeft: 'none',
                outlineColor: '#fff'}}><img src={img5} alt=""/></span>
            </div>
            </div>
            <div style={{marginTop: '35px'}}>
                <hr style={{background: '#41a9d4', height: '1px'}}/>
            </div>
            {/* <img src={line} alt="line"/> */}
        </div>
    )
}
