import React from 'react';
import './RateHistory.css';
import dol from '../Assets/Images/Bitmap.png';
import pon from '../Assets/Images/Bitmap (1).png';
import eur from '../Assets/Images/Bitmap (2).png';
import axios from 'axios';

function formatDate(date) {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return [ year, month, day ].join('-');
}
class TableFull extends React.Component {
	state = {
		xchangeData: null,
		start_date: formatDate(Date.now()),
		end_date: formatDate(Date.now())
	};
	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
		this.date_range(this.state.start_date, this.state.end_date);
	};
	componentDidMount() {
		axios
			.get('https://fxrate.staging-cpg.online/api/v1/fx?limit=365')
			.then((res) => {
				const data = res.data.data;
				this.setState({
					xchangeData: data
				});
			})
			.catch((err) => console.log(err));
	}

	get_date = (date) => {
		return new Date(date);
	};

	date_range = (x, y) => {
		axios
			.get(`https://fxrate.staging-cpg.online/api/v1/fx/all?limit=5&start_date=${x}&end_date=${y}`)
			.then((res) => {
				const data = res.data.data;
				this.setState({
					xchangeData: data
				});
			})
			.catch((err) => console.log(err));
	};
	render() {
		const { xchangeData, start_date, end_date } = this.state;
		return (
			<div className="mt-4 container">
				<h1 className="h1-fnt">Exchange Rate History</h1>
				<h6 className="h6-fnt">
					The exchange rate over a historical period can be determined using the date range selector
				</h6>
				<form
					className="m-auto"
					style={{ border: '1px solid #939393', maxWidth: '450px', padding: '10px', borderRadius: '10px' }}
				>
					<h6 style={{ fontSize: '14px', color: '#939393' }}>Select a date range</h6>
					<div style={{ display: 'flex' }}>
						<input
							className="m-2 form-control"
							type="date"
							name="start_date"
							value={start_date}
							onChange={this.onChange}
							placeholder="2020-08-08"
						/>
						<input
							className="m-2 form-control"
							type="date"
							name="end_date"
							value={end_date}
							onChange={this.onChange}
							placeholder="2020-08-19"
						/>
					</div>
				</form>
                <div style={{overflowY: 'scroll'}}>
                <table class="table mt-4">
					<thead className="thead bg">
						<tr>
							<th scope="col" style={{ background: '#fff', border: 'none', padding: '1.3rem' }} />
							<th scope="col" style={{ padding: '1.3rem' }}>
								<img src={dol} alt="" className="mx-2" />US Dollar
							</th>
							<th scope="col" style={{ padding: '1.3rem' }}>
								<img src={pon} alt="" className="mx-2" />Pounds Sterling
							</th>
							<th scope="col" style={{ padding: '1.3rem' }}>
								<img src={eur} alt="" className="mx-2" />Euro
							</th>
						</tr>
						<tr>
							{/* <div style={{display:'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}> */}
							<th scope="col" style={{ background: '#fff', border: 'none' }} className="mt-2" />
							<th scope="col" className="mt-2 bg2">
								<span className="mx-2">Buy</span> Sell
							</th>
							<th scope="col" className="mt-2 bg2">
								<span className="mx-2">Buy</span> Sell
							</th>
							<th scope="col" className="mt-2 bg2">
								<span className="mx-2">Buy</span> Sell
							</th>
							{/* </div> */}
						</tr>
					</thead>
					<tbody>
						{xchangeData === null ? null : (
							xchangeData.map((data) => {
								return (
									<tr key={data.id}>
										<th scope="row">{formatDate(this.get_date(data.created_at))}</th>
										<td>
											<span className="mx-2">₦{data.xchanges['usd']['buy']}</span> ₦{data.xchanges['usd']['sell']}
										</td>
										<td>
											<span className="mx-2">₦{data.xchanges['gbp']['buy']}</span> ₦{data.xchanges['gbp']['sell']}
										</td>
										<td>
											<span className="mx-2">₦{data.xchanges['eur']['buy']}</span> ₦{data.xchanges['eur']['sell']}
										</td>
									</tr>
								);
							})
						)}
					</tbody>
				</table>
                </div>
				
			</div>
		);
	}
}

export default TableFull;
