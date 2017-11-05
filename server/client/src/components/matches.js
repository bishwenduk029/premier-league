import React, { Component } from 'react';
import { connect } from 'react-redux';
import MatchCard from './matchCard';
import { loadMatches } from '../actions/matchActions';

class Matches extends Component {

  componentDidMount() {
    this.props.loadMatches();
  }

  render() {
    const matches = this.props.matches;
    return (
      <div>
        {this.props.matches.map(match => (<MatchCard match={match} key={match.id} />))}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  matches: state.cricket.matches,
  matchesLoading: state.cricket.matchesLoading,
});

const mapDispatchToProps = (dispatch) => ({
  loadMatches: () => dispatch(loadMatches()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Matches);