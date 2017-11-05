import React, { Component } from 'react';
import ChevronLeft from 'react-icons/lib/md/chevron-left';
import ChevronRight from 'react-icons/lib/md/chevron-right';
import { loadMatches } from '../actions/matchActions';

class Footer extends Component {
	state = {
		minPage: 0,
		maxPage: 10,
		pageCounts: [1,2,3,4,5,6,7,8,9,10].map(item => ({ num: item, active: false })),
	}

	handleForwardPagination = (e) => {
		e.preventDefault();
		this.setState(prevState => ({
			minPage: prevState.minPage + 10,
			maxPage: (prevState.maxPage >= this.props.totalPages) ? prevState.maxPage : prevState.maxPage + 10,
		}));
	}

	handleBackwardPagination = (e) => {
		e.preventDefault();
		this.setState(prevState => ({
			minPage: prevState.minPage - 10,
			maxPage: prevState.maxPage - 10,
		}));
	}

	handlePageChange = (page) => {
		this.setState(prevState => {
			return {
				pageCounts: prevState.pageCounts.map(eachPage => ({
					num: eachPage.num,
					active: (eachPage.num === page) ? true : false
				}))
			};
		})
	}

	render() {
		return (
			<div className="footer">
				<ul className="pagination">
			    <li className="waves-effect"><a onClick={this.handleBackwardPagination} href="#!"><ChevronLeft /></a></li>
						{this.state.pageCounts
							.map(page => {
								if (page <= totalPages)
									<li className={page.active ? "active" : "waves-effect"}><a onClick={(page) => this.handlePageChange(page)} href="#!">{this.state.minPage + page.num}</a></li>
							})
						}
			    <li className="waves-effect"><a onClick={this.handleForwardPagination} href="#!"><ChevronRight /></a></li>
			  </ul>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	totalPages: state.cricket.totalPages,
});

const mapDispatchToProps = dispatch => ({
	getTotalPageCount: () => dispatch(getTotalPageCount()),
	getMatchesForPage: (pageNum) => dispatch(loadMatches(pageNum))
});

export default Footer;
