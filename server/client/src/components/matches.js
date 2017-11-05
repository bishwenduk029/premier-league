import React, { Component } from 'react';
import { connect } from 'react-redux';
import MatchCard from './matchCard';
import Input from './input';
import { loadMatches } from '../actions/matchActions';

class Matches extends Component {

  state = {
    displayMatches: [],
  }

  componentDidMount() {
    this.props.loadMatches();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      displayMatches: nextProps.matches
    });
  }

  filterBasedOnSeason = (season) => {
    console.log(season);
    this.setState(prevState => ({
      displayMatches: this.props.matches.filter(match => (match.season === parseInt(season))),
    }));
  }

  handleScroll = () => {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const { body } = document;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight,
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      if (this.props.lastMatch)
        this.props.loadMatches(this.props.lastMatch);
    }
  }


  render() {
    return (
      <div className="matches">
        <Input handleSeasonChange={this.filterBasedOnSeason} />
        <div className="row">
          {this.state.displayMatches.map(match => (<MatchCard match={match} key={match.id} />))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  matches: state.cricket.matches,
  lastMatch: state.cricket.lastMatch,
  matchesLoading: state.cricket.matchesLoading,
});

const mapDispatchToProps = dispatch => ({
  loadMatches: (matchID) => dispatch(loadMatches(matchID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
