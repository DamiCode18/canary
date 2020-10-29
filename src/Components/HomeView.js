import React, { Component } from 'react';
// import './App.css';
import Home from './Home';
import RateAlert from './RateAlert';
import RateHistory from './RateHistory';
import Landing from './Landing';
import Map from './Map';
import NewsView from './NewsView';


class HomeView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			src:
				'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6089920885634!2d3.4213195141715897!3d6.444224225869168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4d40a6f5ec9%3A0x8d1bb7472a804c8d!2s186%20Awolowo%20Rd%2C%20Ikoyi%2C%20Lagos!5e0!3m2!1sen!2sng!4v1600700018915!5m2!1sen!2sng'
		};
	}
	render() {
		return (
            <div>
					<Landing />
					<RateHistory />
					<NewsView/>
					<Home />
					<Map source={this.state.src} />
					<RateAlert />
				</div>
		);
	}
}
export default HomeView;
