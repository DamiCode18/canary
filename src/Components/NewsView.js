import React, { Component } from 'react';
import './NewsView.css';
import axios from 'axios';
import {Link} from 'react-router-dom'
import img1 from '../Assets/Images/banknote.svg'
import img2 from '../Assets/Images/target.svg'
import img3 from '../Assets/Images/success.svg'

export default class Slide extends Component {
	state = {
		news: []
	};

	componentDidMount() {
		axios
			.get('https://kyc-service.staging-cpg.online/fxnews')
			.then((res) => {
				this.setState({
					news: res.data.message
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}
	render() {
		const { news } = this.state;
		console.log(news);
		return (
            <div id="news" className="mt-3">
<div className="px-5 py-3" style={{ background: '#217599', height: '358px' }}>
				<h4 className="text-center mb-5" style={{ color: '#fff' }}>
					News
				</h4>
				<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
					<ol class="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" />
						<li data-target="#carouselExampleIndicators" data-slide-to="1" />
						<li data-target="#carouselExampleIndicators" data-slide-to="2" />
					</ol>
					<div class="carousel-inner px-5">
									<div class="carousel-item active" style={{height: '15rem'}}>
                                        <div
											className="container"
											style={{ display: 'flex', justifyContent: 'center' }}
										>
											<div className="m-auto">
												<div
													style={{
														width: '263px',
														height: '17vh',
														color: '#fff',
														fontSize: '14px'
													}}
												>
                                                    <img src={img1} alt="" style={{height: '50px', width: '50px'}}/>
													<h5 className="clr">{news.length < 1 ? null : news[0].title}</h5>
													<h6 className="clr">{news.length < 1 ? null : (news[0].description).substring(0,50) +'...'}</h6>
												</div>
											</div>
                                            <div className="m-auto">
												<div
													style={{
														width: '263px',
														height: '17vh',
														color: '#fff',
														fontSize: '14px'
													}}
												>
                                                     <img src={img2} alt="" style={{height: '50px', width: '50px'}}/>
													<h5 className="clr">{news.length < 1 ? null : news[1].title}</h5>
													<h6 className="clr">{news.length < 1 ? null : news[1].description.substring(0,50) +'...'}</h6>
												</div>
											</div>
                                            <div className="m-auto">
												<div
													style={{
														width: '263px',
														height: '17vh',
														color: '#fff',
														fontSize: '14px'
													}}
												>
                                                     <img src={img3} alt="" style={{height: '50px', width: '50px'}}/>
													<h5 className="clr">{news.length < 1 ? null : news[2].title}</h5>
													<h6 className="clr">{news.length < 1 ? null : news[2].description.substring(0,50) +'...'}</h6>
												</div>
											</div>
										</div>
									</div>
									<div class="carousel-item" style={{height: '15rem'}}>
										<div
											className="container"
											style={{ display: 'flex', justifyContent: 'center' }}
										>
											<div className="m-auto hide">
												<div
													style={{
														width: '263px',
														height: '17vh',
														color: '#fff',
														fontSize: '14px'
													}}
												>
                                                     <img src={img1} alt="" style={{height: '50px', width: '50px'}}/>
													<h5 className="clr">{news.length < 1 ? null : news[3].title}</h5>
													<h6 className="clr">{news.length < 1 ? null : news[3].description.substring(0,50) +'...'}</h6>
												</div>
											</div>
											<div className="m-auto hide">
												<div
													style={{
														width: '263px',
														height: '17vh',
														color: '#fff',
														fontSize: '14px'
													}}
												>
                                                     <img src={img2} alt="" style={{height: '50px', width: '50px'}}/>
													<h5 className="clr">{news.length < 1 ? null : news[4].title}</h5>
													<h6 className="clr">{news.length < 1 ? null : news[4].description.substring(0,50) +'...'}</h6>
												</div>
											</div>
											<div className="m-auto hide">
												<div
													style={{
														width: '263px',
														height: '17vh',
														color: '#fff',
														fontSize: '14px'
													}}
												>
                                                     <img src={img3} alt="" style={{height: '50px', width: '50px'}}/>
													<h5 className="clr">{news.length < 1 ? null : news[2].title}</h5>
													<h6 className="clr">{news.length < 1 ? null : news[2].description.substring(0,50) +'...'}</h6>
												</div>
											</div>
										</div>
									</div>
									<div class="carousel-item" style={{height: '15rem'}}>
										<div
											className="container"
											style={{ display: 'flex', justifyContent: 'center' }}
										>
											<div className="m-auto">
												<div
													style={{
														width: '263px',
														height: '17vh',
														color: '#fff',
														fontSize: '14px'
													}}
												>
                                                     <img src={img1} alt="" style={{height: '50px', width: '50px'}}/>
													<h5 className="clr">{news.length < 1 ? null : news[0].title}</h5>
													<h6 className="clr">{news.length < 1 ? null : news[0].description.substring(0,50) +'...'}</h6>
												</div>
											</div>
											<div className="m-auto hide">
												<div
													style={{
														width: '263px',
														height: '17vh',
														color: '#fff',
														fontSize: '14px'
													}}
												>
                                                     <img src={img2} alt="" style={{height: '50px', width: '50px'}}/>
													<h5 className="clr">{news.length < 1 ? null : news[1].title}</h5>
													<h6 className="clr">{news.length < 1 ? null : news[1].description.substring(0,50) +'...'}</h6>
												</div>
											</div>
											<div className="m-auto hide">
												<div
													style={{
														width: '263px',
														height: '17vh',
														color: '#fff',
														fontSize: '14px'
													}}
												>
                                                     <img src={img3} alt="" style={{height: '50px', width: '50px'}}/>
													<h5 className="clr">{news.length < 1 ? null : news[2].title}</h5>
													<h6 className="clr">{news.length < 1 ? null : news[2].description.substring(0,50) +'...'}</h6>
												</div>
											</div>
										</div>
									</div>
            					</div>
					<a
						style={{ marginLeft: '-3rem', marginRight: '-3rem' }}
						class="carousel-control-prev"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="prev"
					>
						<span class="carousel-control-prev-icon" aria-hidden="true" />
						<span class="sr-only">Previous</span>
					</a>
					<a
						style={{ marginLeft: '-3rem', marginRight: '-3rem' }}
						class="carousel-control-next"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="next"
					>
						<span class="carousel-control-next-icon" aria-hidden="true" />
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
            <div className="mt-2">
                <Link to="/news" className="btn btn-lg" style={{background: '#217599', color: '#fff', borderRadius: '0'}}>View All News</Link>
            </div>
            </div>
			
		);
	}
}
