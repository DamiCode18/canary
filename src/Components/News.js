import React, { Component } from 'react'
import './News.css'
import axios from 'axios'

function formatDate(date) {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return [ year, month, day ].join('-');
}
export default class News extends Component {
    state = {
        News: []
    }

    componentDidMount(){
        axios.get('https://kyc-service.staging-cpg.online/fxnews')
        .then(res=>{
            this.setState({
                News: res.data.message
            })
        })
    }
    render() {
        const {News} = this.state;
        return (
            <div className="news">
                <h3 style={{color: '#217599'}}>News</h3>
                {
                 News.length < 1 ? null : 
                 News.map(item=>(
                     <div key={item.id} className="des px-3 mx-auto my-5">
                         <p style={{color: '#fff', fontSize: '1rem'}} className="text-left">Posted on: {formatDate(item.date_posted)}</p>
                         <h4>{item.title}</h4>
                         <h6>{item.description}</h6>
                         <button className="btn btn-md" style={{color: ' #217599', background: '#fff', borderRadius: '0'}}><a href={item.url} target="_blank" rel="noopener noreferrer">Read more...</a></button>
                    </div>
                 ))   
                }
            </div>
        )
    }
}
