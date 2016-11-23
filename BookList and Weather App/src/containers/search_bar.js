import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		//by default this refers to window context not the SearchBar context
		//thats why we need to bind it explicity in the constructor above
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		//we need to go and fetch weather here
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			<form className="input-group" onSubmit={this.onFormSubmit}>
				<input 
				  type="text" 
				  placeholder="Cities"
				  className="form-control"
				  value={this.state.term}
				  //onChange={() => this.onInputChange(event)}
				  onChange={this.onInputChange}
				  />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	} 
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

//null used here is because we need to pass mapDis.. as second argument thats why we kept null as first
export default connect(null, mapDispatchToProps)(SearchBar);