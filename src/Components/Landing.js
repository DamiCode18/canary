import React, {Component} from 'react'
import './Landing.css'
import ikoyi from '../Assets/Images/Group 17.png'
import lad from '../Assets/Images/smilingLady.png'
import dol from '../Assets/Images/Group.png'
import pon from '../Assets/Images/Group Copy.png'
import eur from '../Assets/Images/Group Copy 3.png'
import cal from '../Assets/Images/calculator.png'
import cancel from '../Assets/Images/cancel.png'
class Landing extends Component{
    state = {
        toggle: false
    }
    dropdown=()=>{
        this.setState({
            toggle: !this.state.toggle
        })   
    }
    render(){
        const {toggle} = this.state
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
            <div className="item1" style={{textAlign: 'left', marginRight: '-100px'}}>
                <h5 style={{color: '#939393'}}>Exchange Rate <br/> Today</h5>
                <h3>15/06/2020</h3>
                <p style={{color: '#41a9d4'}}>View Rates History</p>
            </div>
            <div className="item2">
                <img className="img-resize" src={dol} alt=""/>
            </div>
            <div className="item3">
                <img className="img-resize" src={pon} alt=""/>
            </div>
            <div className="item4">
                <img className="img-resize" src={eur} alt=""/>
            </div>
            <div className="item5 mt-3" style={{maxWidth: ''}}>
                <div className="grd p-4" style={{background: '#B2417B', color: '#fff', borderRadius: '10px', width: '10rem'}}>
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