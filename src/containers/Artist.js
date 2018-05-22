import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { UPLOADS } from '../constants/RootURls'
import BreadCrumbs from '../widgets/BreadCrumbs'

//import actions
import { 
	getArtistInfo,
	changeNavbar
} from '../actions'

class Artist extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.match.params.id
		};
	}

	componentWillMount() {
		this.props.getArtistInfo(this.state.id);
		this.props.changeNavbar();
	}

	render() {
		return (
			<div>
				<section id="banner">
					<div className="inner">
						<header>
							<h1>{ this.props.artist.name }</h1>

							<h4>Yours at... { this.props.artist.category }</h4>

							<BreadCrumbs
								currentPath={`/artist/${this.state.id}`}
								currentAlias={this.props.artist.name}
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
									{ this.props.artist.description }
								</p>
								<div className="image fit">
									<img src={`${UPLOADS}${this.props.artist.image2}`} alt="" />
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
		artist: state.getArtistInfo,
		adapt: state.changeNavbar
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getArtistInfo, changeNavbar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Artist);