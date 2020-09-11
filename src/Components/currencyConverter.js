import React, { Component } from 'react'
import axios from 'axios'
import usdlogo from '../Assets/Images/Bitmap.png'
import gbplogo from '../Assets/Images/Bitmap (1).png'
import eurlogo from '../Assets/Images/Bitmap (2).png'
import nigerlogo from '../Assets/Images/niger.png'
import exchange from '../Assets/Images/opposite.svg';
import calculator from '../Assets/Images/calculator.png';
import './index.css'
class CurrencyConverter extends Component {
  constructor() {
    super();

    this.state = {
      // baseCurrency:'GBP',
      // convertToCurrency:'USD',
      baseAmount: 1,
      // rates: [],
      // currencies: [],
      usd: null,
      gbp: null,
      eur: null,
      currency1: { 'symbol': "NGN", "description": "NIGERIAN NAIRA" },
      currency2: { 'symbol': "USD", "description": "US DOLLARS" },
      status: 'sell'
    };

    this.changeBaseCurrency = this.changeBaseCurrency.bind(this);
    this.changeConvertToCurrency = this.changeConvertToCurrency.bind(this);
    this.changeSellConvertToCurrency = this.changeSellConvertToCurrency.bind(this);
    this.changeBaseAmount = this.changeBaseAmount.bind(this);
    // this.getConvertedCurrency = this.getConvertedCurrency.bind(this);
    this.callAPI = this.callAPI.bind(this);
  }

  componentDidMount() {
    this.callAPI(this.state.baseCurrency)
  }

  changeBaseCurrency(e) {
    this.setState({ baseCurrency: e.target.value });
    this.callAPI(e.target.value)

  }

  callAPI(base) {
    //  const api = `https://api.exchangeratesapi.io/latest?base=${base}`;
    const rate = 'https://fxrate.staging-cpg.online/api/v1/fx?limit=1'

    fetch(rate)
      .then(results => {
        return results.json()
      }).then(data => {

        this.setState({
          rates: data.data[0].xchanges,
          eur: data.data[0].xchanges['eur'],
          gbp: data.data[0].xchanges['gbp'],
          usd: data.data[0].xchanges['usd']
          // currencies: Object.keys(data['rates']).sort()
        })
      })
      ;

  }


  changeConvertToCurrency(e) {
    if (e.target.value === "USD") {
      this.setState({
        currency2: { "symbol": e.target.value, "description": "US DOLLARS" }
      })
    }
    else if (e.target.value === "EUR") {
      this.setState({
        currency2: { "symbol": e.target.value, "description": "EUROS" }
      })
    }
    else {
      this.setState({
        currency2: { "symbol": e.target.value, "description": "POUNDS" }
      })
    }
  }

  changeSellConvertToCurrency(e) {
    if (e.target.value === "USD") {
      this.setState({
        currency2: { "symbol": e.target.value, "description": "US DOLLARS" }
      })
    }
    else if (e.target.value === "EUR") {
      this.setState({
        currency2: { "symbol": e.target.value, "description": "EUROS" }
      })
    }
    else {
      this.setState({
        currency2: { "symbol": e.target.value, "description": "POUNDS" }
      })
    }
  }

  changeBaseAmount(e) {
    this.setState({
      baseAmount: e.target.value
    });
  }

  // getConvertedCurrency(baseAmount,convertToCurrency,rates) {
  //     return Number.parseFloat(baseAmount * rates[convertToCurrency]).toFixed(2);
  // }

  getRate = (a, b) => {
    const rate = a * b
    return [<span>{rate}</span>]

  }

  flip = (y) => {
    this.setState({ 
      status: y
   })
  }

  render() {
    const {baseAmount, convertToCurrency, currency1, currency2, usd, eur, gbp, status } = this.state;
    // console.log(this.state.usd.buy)
    // const currencyChoice = currencies.map(currency =>
    //   <option key={currency} value={currency}> {currency} </option>      
    // );

    // const result = this.getConvertedCurrency(baseAmount, convertToCurrency, rates);
    console.log(this.state)

    return (
      <div className="converter-container" style={{width: '700px'}}>
        <div style={{ display: 'flex', justifyContent: "space-between" }}>
          <div className="text-left mt-4">
            <label>Amount</label>
            <input type='number'
              id='base-amount'
              defaultValue={baseAmount}
              onChange={this.changeBaseAmount} name="amount" className="form-control border-line" placeholder="amount" type="number" style={{ width: '50%' }} />
          </div>
          {status === "sell" ? 
          <div>
          <div> <h6><b>Selling Conversion Rate</b></h6> </div>
          <div style={{display: "flex"}}>
            <div className="ml-2" style={{ display: "" }}>
              <label className="text-left">From </label>
              <div style={{ display: 'flex', padding: '2%', width: '150px'}}>
                {
                  this.state.currency2.symbol === "USD" ?
                  <img src={usdlogo} alt='logo' /> :
                  this.state.currency2.symbol === "GBP" ?
                  <img src={gbplogo} alt='logo' /> :
                  this.state.currency2.symbol === "EUR" ?
                  <img src={eurlogo} alt='logo' /> : null
                }
                  <select name="to" className="form-control" onChange={this.changeConvertToCurrency} type="text" value={convertToCurrency} placeholder="to">
                {/* {currencyChoice} */}
                <option>USD</option>
                <option>GBP</option>
                <option>EUR</option>
              </select>
              </div>
            </div>
            <div className="mx-3 mt-4">
                  <img src={exchange} alt="" style={{ width: '35px', height: '35px', cursor: 'pointer' }} onClick={() => this.flip("buy")}/>
                  {/* <button onClick={this.flip("sell")}>Flip</button> */}
                </div>
            {/* <div className="m-auto">
              <img src={exchange} alt="" style={{ width: '65px', height: '45px' }} onClick={this.flip("sell")} />
              <button onClick={() => this.flip("buy")} className="btn btn-info m-auto">Flip</button>
            </div> */}

            <div className="ml-2">
              <label className="text-left">To </label>
              <div style={{ display: 'flex', border: '1px solid black', padding: '2%', width: '150px'}} className="form-control">
                <div style={{ borderRadius: '50%' }}>
                  <img src={nigerlogo} alt='logo' style={{width: '25px', height: '25px'}} />
                </div>
                <h6 className="m-auto" style={{fontSize: ''}} >{this.state.currency1.symbol}</h6>
              </div>
            </div>
          </div>
          </div>
            : status === "buy" ?
            <div>
            <div> <h6><b>Buying Conversion Rate</b></h6> </div>
            <div style={{display: "flex"}}>
              <div className="ml-2" style={{ display: "" }}>
                <label className="text-left">From </label>
                <div style={{ display: 'flex', padding: '2%', width: '150px'}}>
                {
                  this.state.currency2.symbol === "USD" ?
                  <img src={usdlogo} alt='logo' /> :
                  this.state.currency2.symbol === "GBP" ?
                  <img src={gbplogo} alt='logo' /> :
                  this.state.currency2.symbol === "EUR" ?
                  <img src={eurlogo} alt='logo' /> : null
                }
                  <select name="to" className="form-control" onChange={this.changeSellConvertToCurrency} type="text" value={convertToCurrency} placeholder="to">
                    {/* {currencyChoice} */}
                    <option>USD</option>
                    <option>GBP</option>
                    <option>EUR</option>
                  </select>
                </div>
              </div>

                <div className="mx-3 mt-4">
                  <img src={exchange} alt="" style={{ width: '35px', height: '35px', cursor: 'pointer' }} onClick={() => this.flip("sell")}/>
                  {/* <button onClick={this.flip("sell")}>Flip</button> */}
                </div>

                <div className="ml-2">
              <label className="text-left">To </label>
              <div style={{ display: 'flex', border: '1px solid black', padding: '2%', width: '150px'}} className="form-control">
                <div style={{ borderRadius: '50%' }}>
                  <img src={nigerlogo} alt='logo' style={{width: '25px', height: '25px'}} />
                </div>
                <h6 className="m-auto" style={{fontSize: ''}} >{this.state.currency1.symbol}</h6>
              </div>
            </div>
            </div> 
            </div>
            : null
          }

          <div className="mx-auto" style={{marginTop: '55px'}}>
            <img src={calculator} alt="calcultors"  style={{background: 'rgb(178, 65, 123)'}}/>
          </div>

        </div>
        <div>
          {this.state.status === "buy" ?
            <div>
              {currency2.symbol === "USD" ?
                <div>
                  {usd === null ? null : 
                  <div className="mt-3">
                  <h3 style={{color: '#B2417B'}}>${baseAmount} is equal to</h3> 
                  <h3 style={{color: '#41a9d4'}}>₦{this.getRate(usd.buy, baseAmount)}</h3>
                  </div>}
                </div> : currency2.symbol === "EUR" ?
                  <div>
                    {usd === null ? null : 
                    <div className="mt-3">
                    <h3 style={{color: '#B2417B'}}>€{baseAmount} is equal to</h3> 
                    <h3 style={{color: '#41a9d4'}}>₦{this.getRate(eur.buy, baseAmount)}</h3> 
                    </div>}
                  </div> : currency2.symbol === "GBP" ?
                    <div>
                      {usd === null ? null : 
                      <div className="mt-3">
                      <h3 style={{color: '#B2417B'}}>£{baseAmount} is equal to</h3> 
                      <h3 style={{color: '#41a9d4'}}>₦{this.getRate(gbp.buy, baseAmount)}</h3>
                      </div>}
                    </div> : null}
            </div> :
            this.state.status === "sell" ?
              <div>
                {currency2.symbol === "USD" ?
                  <div>
                    {usd === null ? null : 
                    <div className="mt-3">
                    <h3 style={{color: '#B2417B'}}>${baseAmount} is equal to</h3> 
                    <h3 style={{color: '#41a9d4'}}> ₦{this.getRate(usd.sell, baseAmount)}</h3>
                    </div>}
                  </div> : currency2.symbol === "EUR" ?
                    <div>
                      {usd === null ? null : 
                      <div className="mt-3">
                      <h3 style={{color: '#B2417B'}}>€{baseAmount} is equal to</h3> 
                      <h3 style={{color: '#41a9d4'}}>₦{this.getRate(eur.sell, baseAmount)}</h3>
                      </div>}
                    </div> : currency2.symbol === "GBP" ?
                      <div>
                        {usd === null ? null : 
                        <div className="mt-3">
                        <h3 style={{color: '#B2417B'}}>£{baseAmount} is equal to</h3> 
                        <h3 style={{color: '#41a9d4'}}>₦{this.getRate(gbp.sell, baseAmount)}</h3>
                        </div>}
                      </div> : null}
              </div>
              : null
          }
        </div>




        {/* <h2 className="mt-5" id='result-text'>{baseCurrency == 'GBP' ? '£' : baseCurrency == 'USD' ? '$' : baseCurrency == 'EUR' ? '€' : null }{baseAmount} is equal to </h2>
                    <h2>{convertToCurrency == 'GBP' ? '£' : convertToCurrency == 'USD' ? '$' : convertToCurrency == 'EUR' ? '€' : null }{'result'}</h2> */}
      </div>

    );
  }
}

export default CurrencyConverter;