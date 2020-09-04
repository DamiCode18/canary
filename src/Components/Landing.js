import React, {Component} from 'react'
import './Landing.css'
import ikoyi from '../Assets/Images/Group 17.png'
import lad from '../Assets/Images/smilingLady.png'
import dol from '../Assets/Images/Bitmap.png'
import pon from '../Assets/Images/Bitmap (1).png'
import eurlogo from '../Assets/Images/Bitmap (2).png'
import cal from '../Assets/Images/calculator.png'
import cancel from '../Assets/Images/cancel.png'
// import $ from 'jquery'
import axios from 'axios';
import CurrencyConverter from '../Components/currencyConverter'

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

//   $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   })

class Landing extends Component{
    state = {
        toggle: false,
        usd : null,
        eur : null,
        gbp: null,
        open: false,
        from: null,
        to: null,
        amount: null,
        converted: null, 
        result: null
    }
    dropdown=()=>{
        this.setState({
            toggle: !this.state.toggle
        })   
    }
    // handleChange=(e)=>{
    //     this.setState({
            
    //     })
       
    // }
    calc=(e)=>{
        
        this.setState({
            [e.target.name]: e.target.value
        })
        // this.setState({
        //     converted: console.log(result)
        // })
        // this.handleChange;
        if(this.state.from == 'GBP' && this.state.to == 'USD'){
            this.setState({
                    result: console.log((this.state.amount) * (this.state.usd))
            })
        }else if(this.state.from == 'USD' && this.state.to == 'GBP'){
            // return result = (this.state.amount) * (this.state.gbp)
        }else if(this.state.from == 'EUR' && this.state.to == 'USD'){
            // console.log(result)
            // return result = (parseInt(this.state.amount)) * (parseInt(this.state.usd))
            
        }
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
                    <img src={eurlogo} alt="" style={{width: '20px', height: '20px', margin: '5px'}} />
                    <div className="">
                        <h6 style={{fontSize: '9px', color: '#ADADAD', marginBottom: '0px'}}>BUY</h6>
                        <h3 style={{fontSize: '20px', color: '#41a9d4'}}>₦{gbp === null ? null : gbp["buy"]}</h3>
                        <h6 style={{fontSize: '9px', color: '#ADADAD', marginBottom: '0px'}}>SELL</h6>
                        <h3 style={{fontSize: '20px', color: '#B2417B'}}>₦{gbp === null ? null : gbp["sell"]}</h3>
                    </div>
                </div>
            </div>
            <div className="item5 mt-3">
                <div className="grd" style={{background: '#B2417B', color: '#fff', borderRadius: '10px', width: '10rem', height: '6.5rem', cursor: 'pointer'}} data-toggle="modal" data-target="#exampleModal">
                    <div className="item6">
                    <img src={cal} alt=""/>
                    </div>
                    <div className="item7">
                    <h6>Currency <br/> Converter</h6>
                    </div>     
                </div>
               
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header ">
                    <h5 class="modal-title m-auto" id="exampleModalLabel">Currency Converter</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    {/* <CurrencyConverter/> */}
                    {/* <div style={{display: 'flex'}}>
                        <div className="ml-2">
                            <label className="text-left">Amount</label>
                            <input name="amount" className="form-control" onInput={this.calc} value={this.state.amount} placeholder="amount" type="text" style={{maxWidth: '170px'}}/>
                        </div>
                        <div className="ml-2">
                            <label className="text-left">From</label>
                            <select name="from" className="form-control" onInput={this.calc} type="text" value={this.state.from} placeholder="from">
                                <option>USD</option>
                                <option>GBP</option>
                                <option>EUR</option>
                            </select>
                        </div>
                        <div className="ml-2">
                            <label className="text-left">To</label>
                            <select name="to" className="form-control" onInput={this.calc} type="text" value={this.state.to} placeholder="to">
                                <option>USD</option>
                                <option>GBP</option>
                                <option>EUR</option>
                            </select>
                        </div>
                    </div> */}
                </div>
                <div class="modal-footer">
                    <h3>{this.state.converted}</h3>
                </div>
                </div>
            </div>
            </div>
        </div>
        {
        toggle === false ? 
        <button onClick={()=> this.dropdown()} className="w-btn btn py-3 mt-4" style={{color: '#303030', background: '#c1ffc0', borderRadius: '50px'}}><h3>Pre-Order FOREX</h3></button> :
        <div style={{background: '#F0F0F0', padding: '10px'}}>
        <form>
         <div><img onClick={()=> this.dropdown()} src={cancel} alt="cancle" style={{cursor: 'pointer'}}/> </div>
        <div class="page">
        <label class="field a-field a-field_a1">
          <input class="field__input a-field__input" type="text" placeholder="Name" required/>
          <span class="a-field__label-wrap">
            <span class="a-field__label">Name</span>
          </span>
        </label>
        <label class="field a-field a-field_a2">
          <input class="field__input a-field__input" type="number" placeholder="Phone no" required/>
          <span class="a-field__label-wrap">
            <span class="a-field__label">Phone no</span>
          </span>
        </label>    
        <label class="field a-field a-field_a2">
          <input class="field__input a-field__input" type="email" placeholder="Email Address" required/>
          <span class="a-field__label-wrap">
            <span class="a-field__label">Email Address</span>
          </span>
        </label>
        <p style={{fontSize: '15px'}}>I am <span> <label class="field a-field a-field_a2">
            <select className="field__input a-field__input" required style={{width: '12rem'}}>
                <option>Selling</option>
                <option>Buying</option>
            </select>
            <span class="a-field__label-wrap">
          </span>
          </label>
          </span>
            </p> 
            <p><span> <label class="field a-field a-field_a2">
            <div style={{display: 'flex'}}>
            <select className="form-control field__input a-field__input" required style={{width: '4rem'}}>
                <option>$</option>
                <option>€</option>
                <option>£</option>
            </select>
             <input class="field__input a-field__input" type="number" required/>
            </div>
            <span class="a-field__label-wrap">
          </span>
          </label>
          </span>
            </p> 
      </div>
     
         <button className="w-btn btn py-3 mt-4" type="submit" style={{color: '#303030', background: '#c1ffc0', borderRadius: '50px'}}><h3>Pre-Order FOREX</h3></button>
         </form>
         </div>
        }
    </div>
)
    }
    }

export default Landing;