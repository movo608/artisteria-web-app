import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { UPLOADS } from '../constants/RootURls'
import $ from 'jquery'
import BreadCrumbs from '../widgets/BreadCrumbs'

//import actions
import { 
	getMentorInfo,
	changeNavbar
} from '../actions'

class Mentor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.match.params.id
		};
	}

	componentDidMount() {
		this.props.getMentorInfo(this.state.id);
		this.props.changeNavbar();

		this.scrollToTop();
	}

	scrollToTop() {
		$('html, body').animate({
			scrollTop: '0'
		}, 2000);
	}

	render() {
		return (
			<div>
				<section id="banner">
					<div className="inner">
						<header>
							<h1>{ this.props.mentor.name }</h1>

							<h4>Yours at... { this.props.mentor.category }</h4>

							<BreadCrumbs
								currentPath={`/mentor/${this.state.id}`}
								currentAlias={this.props.mentor.name}
							/>
						</header>
					</div>
				</section>

				<section className="wrapper">
					<div className="inner">
						<header className="align-center">
							<h2>About us</h2>
							<p>"We wish to bring changes on everything we lay hands on..."</p>
						</header>
						<div className="flex flex1">
							<div className="video col">
								<p className="caption" style={{fontSize: '1em'}}>
									{ this.props.mentor.description }
								</p>
								<div className="image fit">
									<img src={`${UPLOADS}${this.props.mentor.image2}`} alt="" />
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		mentor: state.getOneMentor,
		adapt: state.changeNavbar
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getMentorInfo, changeNavbar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Mentor);