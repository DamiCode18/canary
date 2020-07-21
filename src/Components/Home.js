import React from 'react'
import img1 from '../Assets/Images/5345.png'
import img2 from '../Assets/Images/10476 [Converted].png'
import img3 from '../Assets/Images/2918295.png'
import img4 from '../Assets/Images/5869.png'
import './Home.css'
export default function Home() {
    return (
        <div className="container mt-4">
            <h1 style={{color: '#b2407b', fontWeight: '450'}}>Why you should trade with us</h1>
            <div className="row mt-4">
                <div className="col-md-6 col-sm-12">
                    <h5 className="my-4">Cash Purchase <br/> Sales Forex</h5>
                    <p className="p-left">You can order cash to buy and sell easily with us at our office anytime during the business hours of the week. Call Donnette BDC for your cash purchase and sales of Forex to discuss and agree rates for immediate payment.</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src={img1} alt="img"/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6 col-sm-12">
                    <img src={img2} alt="img"/>
                </div>
                <div className="col-md-6 col-sm-12">
                    <h5 className="my-4">Personal Travel Allowance (PTA) & <br/>Business Travel Allowance (BTA)</h5>
                    <p className="p-right">Whether you’re travelling abroad as an individual or corporate entity,  you can purchase foreign exchange for a business trip or holidays. We are authorized by the Central bank of Nigeria as a BDC for the sale of Business Travel Allowance (BTA) and Personal Travel Allowance (PTA).</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6 col-sm-12">
                    <h5 className="my-4">Credit Card Payments</h5>
                    <p className="p-left">We bring you the convenience of making payments on your terms. Choose our credit card payment services, all designed to accommodate your hectic lifestyle.</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src={img3} alt="img"/>
                </div>
            </div>
            <div className="row mt-4">
                 <div className="col-md-6 col-sm-12">
                    <img src={img4} alt="img"/>
                </div>
                <div className="col-md-6 col-sm-12">
                    <h5 className="my-4">Foreign Payments</h5>
                    <p className="p-right">Donnette BDC helps you minimize the resources required to manage your international payments.</p>
                </div>
            </div>
        </div>
    )
}
