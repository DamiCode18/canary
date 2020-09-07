import React, { Component } from 'react'
import axios from 'axios'
import eurlogo from '../Assets/Images/Bitmap (2).png'
import exchange from '../Assets/Images/exchange.svg';
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
        currency1: { "symbol": e.target.value, "description": "US DOLLARS" }
      })
    }
    else if (e.target.value === "EUR") {
      this.setState({
        currency1: { "symbol": e.target.value, "description": "EUROS" }
      })
    }
    else {
      this.setState({
        currency1: { "symbol": e.target.value, "description": "POUNDS" }
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
    this.setState({ status: y,
    currency2: {"symbol": "NGN", "description": "NIGERIAN NGN"},
    currency1: { "symbol": "USD", "description": "US DOLLARS" }
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
      <div className="converter-container">
        <div style={{ display: 'flex', justifyContent: "space-between" }}>

          <div className="text-left">
            <label>Amount</label>
            <input type='number'
              id='base-amount'
              defaultValue={baseAmount}
              onChange={this.changeBaseAmount} name="amount" className="form-control border-line" placeholder="amount" type="number" style={{ width: '50%' }} />
          </div>
          {status === "sell" ? <div display="flex">
            <div className="ml-2" style={{ display: "flex" }}>
              <label className="text-left">From </label>
              <div style={{ display: 'flex', border: '1px solid black', padding: '2%' }}>
                <div style={{ borderRadius: '50%' }}>
                  <img src={eurlogo} alt='logo' />
                </div>
                <div>
                  <h2>{this.state.currency1.symbol}</h2>
                  <h5>{this.state.currency1.description}</h5>
                </div>

              </div>
              {/* <select name="from" className="form-control" onChange={this.changeBaseCurrency} type="text" value={baseCurrency} placeholder="from">
                          
                                <option>USD</option>
                                <option>GBP</option>
                                <option>EUR</option>
                            </select> */}
            </div>

            <div className="m-auto">
              {/* <img src={exchange} alt="" style={{ width: '65px', height: '45px' }} onClick={this.flip("sell")} /> */}
              <button onClick={() => this.flip("buy")}>Flip</button>
            </div>

            <div className="ml-2">
              <label className="text-left">To </label>
              <div style={{ display: 'flex', border: '1px solid black', padding: '2%' }}>
                <div style={{ borderRadius: '50%' }}>
                  <img src={eurlogo} alt='logo' />
                </div>
              </div>
              <select name="to" className="form-control" onChange={this.changeConvertToCurrency} type="text" value={convertToCurrency} placeholder="to">
                {/* {currencyChoice} */}
                <option>USD</option>
                <option>GBP</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
            : status === "buy" ?
            <div >
              <div className="ml-2" style={{ display: "flex" }}>
                <label className="text-left">From </label>
                <div className="ml-2">
                  <label className="text-left">To </label>
                  <div style={{ display: 'flex', border: '1px solid black', padding: '2%' }}>
                    <div style={{ borderRadius: '50%' }}>
                      <img src={eurlogo} alt='logo' />
                    </div>
                  </div>
                  <select name="to" className="form-control" onChange={this.changeSellConvertToCurrency} type="text" value={convertToCurrency} placeholder="to">
                    {/* {currencyChoice} */}
                    <option>USD</option>
                    <option>GBP</option>
                    <option>EUR</option>
                  </select>
                </div>


                <div className="m-auto">
                  <img src={exchange} alt="" style={{ width: '65px', height: '45px' }} onClick={() => this.flip("sell")}/>
                  {/* <button onClick={this.flip("sell")}>Flip</button> */}
                </div>

                <div style={{ display: 'flex', border: '1px solid black', padding: '2%' }}>
                  <div style={{ borderRadius: '50%' }}>
                    <img src={eurlogo} alt='logo' />
                  </div>
                  <div>
                    <h2>{this.state.currency2.symbol}</h2>
                    <h5>{this.state.currency2.description}</h5>
                  </div>

                </div>
                {/* <select name="from" className="form-control" onChange={this.changeBaseCurrency} type="text" value={baseCurrency} placeholder="from">
                          
                                <option>USD</option>
                                <option>GBP</option>
                                <option>EUR</option>
                            </select> */}
              </div>

            </div> 
            : null
          }

          <div className="m-auto">
            <img src={calculator} alt="calcultors"  style={{background: 'rgb(178, 65, 123)'}}/>
          </div>

        </div>
        <div>
          {currency1.symbol === "NGN" ?
            <div>
              {currency2.symbol === "USD" ?
                <div>
                  {usd === null ? null : <p>{baseAmount} is equal to {this.getRate(usd.buy, baseAmount)}</p>}
                </div> : currency2.symbol === "EUR" ?
                  <div>
                    {usd === null ? null : <p>{baseAmount} is equal to {this.getRate(eur.buy, baseAmount)}</p>}
                  </div> : currency2.symbol === "GBP" ?
                    <div>
                      {usd === null ? null : <p>{baseAmount} is equal to {this.getRate(gbp.buy, baseAmount)}</p>}
                    </div> : null}
            </div> :
            currency2.symbol === "NGN" ?
              <div>
                {currency1.symbol === "USD" ?
                  <div>
                    {usd === null ? null : <p>{baseAmount} is equal to {this.getRate(usd.sell, baseAmount)}</p>}
                  </div> : currency1.symbol === "EUR" ?
                    <div>
                      {usd === null ? null : <p>{baseAmount} is equal to {this.getRate(eur.sell, baseAmount)}</p>}
                    </div> : currency1.symbol === "GBP" ?
                      <div>
                        {usd === null ? null : <p>{baseAmount} is equal to {this.getRate(gbp.sell, baseAmount)}</p>}
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