import React from 'react';
import './RateHistory.css';
import dol from '../Assets/Images/Bitmap.png';
import pon from '../Assets/Images/Bitmap (1).png';
import eur from '../Assets/Images/Bitmap (2).png';
import axios from 'axios';

class RateHistory extends React.Component {
    state = {
        xchangeData: null
    }

    componentDidMount() {
        axios.get('https://fxrate.staging-cpg.online/api/v1/fx?limit=5')
            .then(res => {
                const data = res.data.data
                this.setState({
                    xchangeData: data
                })
            })
            .catch(err => console.log(err))
    }

    get_date = (date) => {
        return new Date(date).toDateString()
    }

    render() {
        const { xchangeData } = this.state
        console.log(xchangeData)
        return (
            <div className="mt-4 container">
                <h1 className="h1-fnt">Exchange Rate History</h1>
                <h6 className="h6-fnt">The exchange rate over a historical period can be determined using the date range selector</h6>
                <form className="m-auto" style={{ border: '1px solid #939393', maxWidth: '450px', padding: '10px', borderRadius: '10px' }}>
                    <h6 style={{ fontSize: '14px', color: '#939393' }}>Select a date range</h6>
                    <input className="m-2" type="date" id="from" name="from" />
                    <input className="m-2" type="date" id="to" name="to" />
                </form>
                <table class="table mt-4">
                    <thead className="thead bg">
                        <tr>
                            <th scope="col" style={{ background: '#fff' }}></th>
                            <th scope="col"><img src={dol} alt="" className="mx-2" />US Dollar</th>
                            <th scope="col"><img src={pon} alt="" className="mx-2" />Pounds Sterling</th>
                            <th scope="col"><img src={eur} alt="" className="mx-2" />Euro</th>
                        </tr>
                    </thead>
                    <tbody>
                    {xchangeData === null ? null : xchangeData.map(data => {
                        
                        return (
                           
                                <tr key={data.id}>
                                    <th scope="row">{this.get_date(data.created_at)}</th>
                                    <td>₦{data.xchanges["usd"]["buy"]} ₦{data.xchanges["usd"]["sell"]}</td>
                                    <td>₦{data.xchanges["gbp"]["buy"]} ₦{data.xchanges["gbp"]["sell"]}</td>
                                    <td>₦{data.xchanges["eur"]["buy"]} ₦{data.xchanges["eur"]["sell"]}</td>

                                </tr>
                          
                        )
                       
                    })
                                        }
                                        </tbody>
                
                </table>
            </div>
        )
    }

}

export default RateHistory;