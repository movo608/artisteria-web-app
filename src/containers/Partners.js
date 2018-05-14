import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'

// import actions
import { getPartners } from '../actions'

// import root urls
import { UPLOADS } from '../constants/RootURls'

class Partners extends Component {
	componentDidMount() {
		this.props.getPartners();
	}

	openWindow(url) {
		url.substring(0, 4) === 'http' || url.substring(0, 5) === 'https' ? window.open(url) : window.open(`https://${url}`);
	}

	renderPartner() {
		return _.map(this.props.partners, (it) => {
			return ( 
				<div style={ {cursor: 'pointer'} } onClick={ () => this.openWindow(it.link) } key={ it.id } className="video col">
					<div className="image fit">
						<img src={`${UPLOADS}${it.logo}`} alt="" />
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<section className="wrapper style1" id="form">
				<div className="inner">
					<header>
						<h2>Partners</h2>
						<p className="partner-sub">
							We owe our sincerest gratitude to...
						</p>
					</header>
					<div className="content">
						<div className="flex flex-4">
							{ this.renderPartner() }
						</div>
					</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		partners: state.getPartners
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getPartners }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Partners);