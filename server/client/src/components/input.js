import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import $ from 'jquery';
import { material_select } from 'materialize-css/dist/js/materialize.min.js';

const InputDiv = styled.div`
	margin-bottom: 2%:
`;

class Input extends Component {
	state = {
		season: '',
	}

	handleChange = (event) => {
    this.setState({ season: event.target.value });
    this.props.handleSeasonChange(event.target.value);
  }

  renderSeasonOptions = () => {
  	let matches = new Set(this.props.matches.map(match => match.season));
  	return (
  		Array.from(matches).map(season => <option key={season} value={season}>{ season }</option>)
  	);
  }

  componentDidUpdate() {
     $('select').material_select();
  }

	render() {
		return (
			<InputDiv className="row">
				<div className="col s4">
					<label>Filter By Season</label>
			    <select className="browser-default" value={this.state.season} onChange={this.handleChange}>
			    	<option value="" disabled>Choose a season</option>
			    	{ this.renderSeasonOptions() }
			    </select>
			  </div>
			</InputDiv>
		);
	}

}

const mapStateToProps = state => ({
	matches: state.cricket.matches,
});

export default connect(mapStateToProps, null)(Input);