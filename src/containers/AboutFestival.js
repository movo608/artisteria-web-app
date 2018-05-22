import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BreadCrumbs from '../widgets/BreadCrumbs'

//import actions
import { changeNavbar } from '../actions'

class AboutFestival extends Component {
	componentWillMount() {
		this.props.changeNavbar();
	}

	render() {
		return (
			<div>
				<section className="wrapper">
					<div className="inner">
						<header>
							<BreadCrumbs
								currentPath={`/about/festival`}
								currentAlias={'About Festival'}
							/>
							<h2>Ce vrem?</h2>
							<p className="contact-sub">Pe scurt, să arătăm tuturor că nu se moare de foame din artă</p>
						</header>
					</div>
				</section>
				<div className="wrapper style1">
					<div className="inner">
						<div className="flex flex-2">
							<div className="col">
								<p>
									Da. Urmărim dezvoltarea unor abilități și competențe noi într-ale artei. De altfel, creăm artiști,
									sau îi ajutăm să își descopere talentul.
								</p>
								<img className="image fit" src="/images/about-festival02.jpg" alt="mask, girl, art, beautiful" />
							</div>
							<div className="col">
								<img className="image fit" src="/images/about-festival01.jpg" alt="paintings, art, paintings on walls" />
								<p>
									Îi și învățăm cum se face contactul cu publicul. Și facem campanii de dezvoltare personală în artă.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		adapt: state.changeNavbar
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ changeNavbar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutFestival);