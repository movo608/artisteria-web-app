import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//import actions
import { changeNavbar } from '../actions'

//import testimonials
import Testimonials from '../widgets/Testimonials'

const PORTRAITS = '/images/portraits/'

class AboutUs extends Component {
	componentWillMount() {
		this.props.changeNavbar();
	}

	render() {
		return (
			<div>
				<section className="wrapper style1">
					<div className="inner">
						<header>
							<h2>Cine suntem?</h2>
							<p className="contact-sub">
								Niște oameni adunați din toată țara - un grup mic, cu speranțe mari.
								Dorim să susţinem pasiunile şi aspiraţiile tinerilor artiști, fie ei pasionați ai fotografiei, 
								cinematografiei, dansului, picturii sau actoriei, oferindu-le posibilitatea de a-și învinge emoțiile și de a-și experimenta &nbsp;
								<span style={{fontWeight: '700'}}>visul artistic</span>.
							</p>
						</header>
					</div>

					<div className="inner">
						<div className="flex flex-2">
							<div className="col">
								<p>
									Proiectul apare dintr-o nevoie în contextul în care tinerii îşi petrec timpul liber din ce în ce mai mult în <span style={{fontWeight: '700'}}>mediul virtual</span>, 
									datorită numeroșilor factori printre care şi lipsa susţinerii active şi promovarea tinerilor aflaţi la început de drum în
									domeniul artei, precum şi lipsa resurselor financiare și implicit materiale. Acest proiect îşi propune să faciliteze 
									procesul dezvoltării şi să promoveze <span style={{fontWeight: '700'}}>elevii artiști</span>. Astfel, sunt încurajate activităţile extracurriculare de petrecere
									în mod benefic a timpului liber şi sunt promovaţi şi susţinuţi artiștii. 
								</p>
								<p>
									Obiectivul acestui proiect este de a pune în valoare şi de a face cunoscute şi
									remarcate talentele adolescenților care din diferite motive, piedici fie ele materiale sau de altă natură nu și le pot cultiva.								
								</p>
							</div>
							<div className="col">
								<div className="image fit">
									<img src="/images/about01.jpg" />
								</div>
							</div>
						</div>
						<div className="wrapper-testimonials">
							<Testimonials />
						</div>
					</div>
				</section>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);