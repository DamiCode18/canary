import React, {Component} from 'react'
import './Landing.css'
import ikoyi from '../Assets/Images/Group 17.png'
import lad from '../Assets/Images/smilingLady.png'
import dol from '../Assets/Images/Bitmap.png'
import pon from '../Assets/Images/Bitmap (1).png'
// import eur from '../Assets/Images/Bitmap (2).png'
import cal from '../Assets/Images/calculator.png'
import cancel from '../Assets/Images/cancel.png'
import axios from 'axios';

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  
    return [day, month, year].join('-');
  }


class Landing extends Component{
    state = {
        toggle: false,
        usd : null,
        eur : null,
        gbp: null
    }
    dropdown=()=>{
        this.setState({
            toggle: !this.state.toggle
        })   
    }

    componentDidMount(){
        axios.get('https://fxrate.staging-cpg.online/api/v1/fx')
        .then(res => {
            const data = res.data.data[0]["xchanges"]
            this.setState({
                usd: data["usd"],
                eur: data["eur"],
                gbp: data["gbp"]
            })
        })
        .catch(err=> console.log(err))
    }

    render(){
        const {toggle, usd, eur, gbp} = this.state
return (
    <div className="">
        <div className="landing">
        <div className="row l-marg">
            <div className="col-sm-6 wid">
                <img src={ikoyi} alt="" className="lad-resize"/>
                <h4 className="siz">Our rates beat whatever competition is offering you</h4>
            </div>
            <div className="col-sm-6 wid">
                <img src={lad} alt="" className="lad-resize"/>
            </div>
        </div> 
        </div>
        <div className="grid-it container-fluid mt-3">
            <div className="item1">
                <h5 style={{color: '#939393', textAlign: 'left'}}>Exchange Rate <br/> Today</h5>
                <h3 style={{textAlign: 'left', color: '#939393'}}>{formatDate(Date.now())}</h3>
                <p style={{color: '#41a9d4', textAlign: 'left'}}>View Rates History</p>
            </div>
            <div className="item2">
                <div className="img-resize" style={{display: 'flex', paddingLeft: '5px', paddingRight: '5px', paddingTop: '10px', paddingBottom: '10px'}}>
                    <div>
                        <h1 style={{color: '#41a9d4'}}>$</h1>
                        <h6 style={{fontSize: '12px', color: '#ADADAD'}}>US Dollar</h6>
                    </div>
                    <img src={dol} alt="" style={{width: '20px', height: '20px', margin: '5px'}} />
                    <div className="">
                        <h6 style={{fontSize: '9px', color: '#ADADAD', marginBottom: '0px'}}>BUY</h6>
                        <h3 style={{fontSize: '20px', color: '#41a9d4'}}>₦{usd === null ? null : usd["buy"]}</h3>
                        <h6 style={{fontSize: '9px', color: '#ADADAD', marginBottom: '0px'}}>SELL</h6>
                        <h3 style={{fontSize: '20px', color: '#B2417B'}}>₦{usd === null ? null : usd["sell"]}</h3>
                    </div>
                </div>
            </div>
            <div className="item3">
                <div className="img-resize" style={{display: 'flex', paddingLeft: '5px', paddingRight: '5px', paddingTop: '10px', paddingBottom: '10px'}}>
                    <div>
                        <h1 style={{color: '#41a9d4'}}>£</h1>
                        <h6 className="mx-2" style={{fontSize: '12px', color: '#ADADAD'}}>Pounds</h6>
                    </div>
                    <img src={pon} alt="" style={{width: '20px', height: '20px', margin: '5px'}} />
                    <div className="">
                        <h6 style={{fontSize: '9px', color: '#ADADAD', marginBottom: '0px'}}>BUY</h6>
                        <h3 style={{fontSize: '20px', color: '#41a9d4'}}>₦{eur === null ? null : eur["buy"]}</h3>
                        <h6 style={{fontSize: '9px', color: '#ADADAD', marginBottom: '0px'}}>SELL</h6>
                        <h3 style={{fontSize: '20px', color: '#B2417B'}}>₦{eur === null ? null : eur["sell"]}</h3>
                    </div>
                </div>
            </div>
            <div className="item4">
                <div className="img-resize" style={{display: 'flex', paddingLeft: '5px', paddingRight: '5px', paddingTop: '10px', paddingBottom: '10px'}}>
                    <div>
                        <h1 style={{color: '#41a9d4'}}>‎€</h1>
                        <h6 className="mx-3" style={{fontSize: '12px', color: '#ADADAD'}}>Euro</h6>
                    </div>
                    <img src={eur} alt="" style={{width: '20px', height: '20px', margin: '5px'}} />
                    <div className="">
                        <h6 style={{fontSize: '9px', color: '#ADADAD', marginBottom: '0px'}}>BUY</h6>
                        <h3 style={{fontSize: '20px', color: '#41a9d4'}}>₦{gbp === null ? null : gbp["buy"]}</h3>
                        <h6 style={{fontSize: '9px', color: '#ADADAD', marginBottom: '0px'}}>SELL</h6>
                        <h3 style={{fontSize: '20px', color: '#B2417B'}}>₦{gbp === null ? null : gbp["sell"]}</h3>
                    </div>
                </div>
            </div>
            <div className="item5 mt-3">
                <div className="grd" style={{background: '#B2417B', color: '#fff', borderRadius: '10px', width: '10rem', height: '6.5rem'}}>
                    <div className="item6">
                    <img src={cal} alt=""/>
                    </div>
                    <div className="item7">
                    <h6>Currency <br/> Converter</h6>
                    </div>     
                </div>
               
            </div>
        </div>
        {
        toggle === false ? 
        <button onClick={()=> this.dropdown()} className="w-btn btn py-3 mt-4" style={{color: '#303030', background: '#c1ffc0', borderRadius: '50px'}}><h3>Pre-Order FOREX</h3></button> :
        <div style={{background: '#F0F0F0', padding: '10px'}}>
         <div><img onClick={()=> this.dropdown()} src={cancel} alt="cancle" style={{cursor: 'pointer'}}/> </div>
        <div class="page">
        <label class="field a-field a-field_a1">
          <input class="field__input a-field__input" placeholder="Name" required/>
          <span class="a-field__label-wrap">
            <span class="a-field__label">Name</span>
          </span>
        </label>
        <label class="field a-field a-field_a2">
          <input class="field__input a-field__input" placeholder="Phone no" required/>
          <span class="a-field__label-wrap">
            <span class="a-field__label">Phone no</span>
          </span>
        </label>    
        <label class="field a-field a-field_a2">
          <input class="field__input a-field__input" placeholder="Email Address" required/>
          <span class="a-field__label-wrap">
            <span class="a-field__label">Email Address</span>
          </span>
        </label>
        <p style={{fontSize: '15px'}}>I am <span> <label class="field a-field a-field_a2">
             <input class="field__input a-field__input" required/>
            <span class="a-field__label-wrap">
          </span>
          </label>
          </span>
            </p> 
            <p><span> <label class="field a-field a-field_a2">
             <input class="field__input a-field__input" required/>
            <span class="a-field__label-wrap">
          </span>
          </label>
          </span>
            </p> 
      </div>
     
         <button className="w-btn btn py-3 mt-4" style={{color: '#303030', background: '#c1ffc0', borderRadius: '50px'}}><h3>Pre-Order FOREX</h3></button>
         </div>
        }
    </div>
)
    }
    }

export default Landing;