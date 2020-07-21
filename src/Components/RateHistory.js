import React from 'react'
import './RateHistory.css'
import dol from '../Assets/Images/Bitmap.png'
import pon from '../Assets/Images/Bitmap (1).png'
import eur from '../Assets/Images/Bitmap (2).png'
export default function RateHistory() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    return (
        <div className="mt-4 container">
            <h1 style={{color: '#b2407b', fontWeight: '450'}}>Exchange Rate History</h1>
            <h6 style={{color: '#939393', fontSize: '18px'}}>The exchange rate over a historical period can be determined using the date range selector</h6>
            <form className="m-auto" style={{border: '1px solid #939393', width: '450px', padding: '10px', borderRadius: '10px'}}>
            <h6 style={{fontSize: '14px', color: '#939393'}}>Select a date range</h6>
            <input className="m-2" type="date" id="from" name="from"/>
            <input className="m-2" type="date" id="to" name="to"/>
            {/* <input type="submit"/> */}
            </form>
             <table class="table mt-4">
                                        <thead className="thead bg">
                                        <tr>
                                        <th scope="col" style={{background: '#fff'}}></th>
                                        <th scope="col"><img src={dol} alt="" className="mx-2"/>US Dollar</th>
                                        <th scope="col"><img src={pon} alt="" className="mx-2"/>Pounds Sterling</th>
                                        <th scope="col"><img src={eur} alt="" className="mx-2"/>Euro</th>                                    
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="paint">
                                        <th scope="row">15 . 06. 2020</th>
                                        <td>₦200000 ₦200000</td>
                                        <td>₦183000 ₦200000</td>
                                        <td>₦10000 ₦200000</td>
        
                                        </tr>
                                        <tr>
                                        <th scope="row">15 . 06. 2020</th>
                                        <td>₦200000 ₦200000</td>
                                        <td>₦183000 ₦200000</td>
                                        <td>₦10000 ₦200000</td>
                                        </tr>
                                        <tr className="paint">
                                        <th scope="row">15 . 06. 2020</th>
                                        <td>₦200000 ₦200000</td>
                                        <td>₦183000 ₦200000</td>
                                        <td>₦10000 ₦200000</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">15 . 06. 2020</th>
                                        <td>₦200000 ₦200000</td>
                                        <td>₦183000 ₦200000</td>
                                        <td>₦10000 ₦200000</td>
                                        </tr>
                                        <tr className="paint"> 
                                        <th scope="row">15 . 06. 2020</th>
                                        <td>₦200000 ₦200000</td>
                                        <td>₦183000 ₦200000</td>
                                        <td>₦10000 ₦200000</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">15 . 06. 2020</th>
                                        <td>₦200000 ₦200000</td>
                                        <td>₦183000 ₦200000</td>
                                        <td>₦10000 ₦200000</td>
                                        </tr>
                                        </tbody>
                                    </table>
        </div>
    )
}
