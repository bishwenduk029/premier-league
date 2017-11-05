import React from 'react';

const MatchCard = props => (
  <div className="col s12 m4 l4">
    <div className="card">
      <div className="card-content black-text">
        <span className="card-title">
          {props.match.team1} vs {props.match.team2}
        </span>
        <p>
          {props.match.winner} won the match by{' '}
          {props.match.win_by_runs === 0
            ? `${props.match.win_by_wickets} wickets`
            : `${props.match.win_by_runs} runs`}
        </p>
        <div className="navy-500">
          <div className="mr2">
            <span className="bold navy-600">{props.match.player_of_match}</span>
            <span className="ml1 normal">was man of the match</span>
          </div>
          <div className="mr2">
            <span className="ml1 normal">{ props.match.season }</span>
          </div>
        </div>
      </div>
      <div className="card-action">
        <a href="/auth/google">View Full Match</a>
      </div>
    </div>
  </div>
);

export default MatchCard;
