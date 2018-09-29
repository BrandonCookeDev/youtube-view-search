import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from '../../node_modules/axios/dist/axios.min.js'

let port = 4000;
let API_URL = `localhost:${4000}/api/yt`;

export default class Form extends Component {

	constructor(props){
		super(props);

		this.state = {
			searchArgs: '',
			resultCount: 10,
			pageCount: 5,
			channel: '',
			filterArgs: '',
			results: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		let params = {
			searchArgs: this.state.searchArgs,
			resultCount: this.state.resultCount,
			pageCount: this.state.pageCount,
			channel: this.state.channel,
			filterArgs: this.state.filterArgs
		}
		axios.post(API_URL, params)
			.then(data => {
				this.setState({results: data})
			})
			.catch(console.error);
	}

	render(){
		return (
			<div>
				<Grid>
					<Row className="show-grid">
						<Col lg={6}>
							<form onSubmit={this.submitForm()}>
								<input type="text" id="searchArgs" class="input" name="searchArgs" placeholder="Search Args w/ Comma" />
								<br/>
								<input type="number" id="resultCount" class="input" name="resultCount"  />
								<br/>
								<input type="number" id="pageCount" class="input" name="pageCount"  />
								<br/>
								<input type="text" id="channel" class="input" name="channel" placeholder="YT Channel" />
								<br/>
								<input type="text" id="filterArgs" class="input" name="filterArgs" placeholder="Filter args" />
								<br/>
								<input type="submit" value="search" />
							</form>
						</Col>
						<Col lg={6}>
							{this.state.results}
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}