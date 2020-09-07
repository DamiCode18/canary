import React, {Component} from 'react'
import axios from 'axios'
import eurlogo from '../Assets/Images/Bitmap (2).png'
import exchange from '../Assets/Images/exchange.svg'
  class CurrencyConverter extends Component {
    constructor() {
      super();
      
      this.state = {
        baseCurrency:'GBP',
        convertToCurrency:'USD',
        baseAmount: 1,
        rates: [],
        currencies: []
      };
      
      this.changeBaseCurrency = this.changeBaseCurrency.bind(this);
      this.changeConvertToCurrency = this.changeConvertToCurrency.bind(this);
      this.changeBaseAmount = this.changeBaseAmount.bind(this);
      this.getConvertedCurrency = this.getConvertedCurrency.bind(this);
      this.callAPI = this.callAPI.bind(this);
    }
    
    componentDidMount() {
     this.callAPI(this.state.baseCurrency)
    }
    
    changeBaseCurrency(e) {
      this.setState({ baseCurrency: e.target.value});
      this.callAPI(e.target.value)
      
    }
    
   callAPI(base) {
     const api = `https://api.exchangeratesapi.io/latest?base=${base}`;
      
      fetch(api)
       .then(results => {
          return results.json()
      }).then(data => this.setState({
        rates: data['rates'],
        currencies: Object.keys(data['rates']).sort()
      }));
     
   } 
    
    
    changeConvertToCurrency(e) {
      this.setState({
        convertToCurrency: e.target.value
      });
    }
    
    changeBaseAmount(e) {
     this.setState({
       baseAmount: e.target.value
     });
    }
    
    getConvertedCurrency(baseAmount,convertToCurrency,rates) {
        return Number.parseFloat(baseAmount * rates[convertToCurrency]).toFixed(2);
    }
    
    render() {
      const {currencies,rates,baseCurrency,baseAmount,convertToCurrency} = this.state;
      
      const currencyChoice = currencies.map(currency =>
        <option key={currency} value={currency}> {currency} </option>      
      );
                                            
      const result = this.getConvertedCurrency(baseAmount, convertToCurrency, rates);
      
      
      return(
          <div>
                <div style={{display: 'flex'}}>
                        <div className="ml-2">
                            <label className="text-left">Amount</label>
                            <input type='number' 
                            id='base-amount' 
                            defaultValue={baseAmount} 
                            onChange={this.changeBaseAmount} name="amount" className="form-control" placeholder="amount" type="number" style={{maxWidth: '170px'}}/>
                        </div>
                        <div className="ml-2">
                            <label className="text-left">from {baseCurrency == 'GBP' ? '£' : baseCurrency == 'USD' ? '$' : baseCurrency == 'EUR' ? '€' : null }</label>
                            <select name="from" className="form-control" onChange={this.changeBaseCurrency} type="text" value={baseCurrency} placeholder="from">
                            {/* {currencyChoice} */}
                                <option>USD</option>
                                <option>GBP</option>
                                <option>EUR</option>
                            </select>
                        </div>
                        <div className="m-auto">
                            <img src={exchange} alt="" style={{width: '65px', height: '45px'}}/>
                        </div>
                        <div className="ml-2">
                            <label className="text-left">To {convertToCurrency == 'GBP' ? '£' : convertToCurrency == 'USD' ? '$' : convertToCurrency == 'EUR' ? '€' : null }</label>
                            <select name="to" className="form-control" onChange={this.changeConvertToCurrency} type="text" value={convertToCurrency} placeholder="to">
                            {/* {currencyChoice} */}
                                <option>USD</option>
                                <option>GBP</option>
                                <option>EUR</option>
                            </select>
                        </div>
                    </div>
                    <h2 className="mt-5" id='result-text'>{baseCurrency == 'GBP' ? '£' : baseCurrency == 'USD' ? '$' : baseCurrency == 'EUR' ? '€' : null }{baseAmount} is equal to </h2>
                    <h2>{convertToCurrency == 'GBP' ? '£' : convertToCurrency == 'USD' ? '$' : convertToCurrency == 'EUR' ? '€' : null }{result}</h2>
          </div>
                    
      );
    }
  }

  export default CurrencyConverter;