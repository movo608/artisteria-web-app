import React, { Component } from 'react'

const PORTRAITS = '/images/portraits/';

export default class Testimonials extends Component {
	componentDidMount() {
		let script = document.createElement('script');

		script.src = '/assets/js/testimonial.js';
		script.async = true;
		script.id = 'testimonials';
	
		document.body.appendChild(script);
	}

	render() {
		return (
			<div className="testimonials-container section-container section-container-image-bg">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 testimonials section-description">
						<h2>Our Testimonials</h2>
						<div className="divider-1"><div className="line"></div></div>
						<p className="medium-paragraph">Take a peek below at our team's thoughts:</p>
					</div>
					</div>
					<div className="row">
						<div className="col-sm-10 col-sm-offset-1 testimonial-list">
							<div role="tabpanel">
								<div className="tab-content">
									<div role="tabpanel" className="tab-pane fade in active" id="tab1">
										<div className="testimonial-image">
											<img src={ `${PORTRAITS}moldo.jpg` } alt="t1" />
										</div>
										<div className="testimonial-text">
											<p>
												"Veni, vidi, vici, έγινε φωτογράφος. Am văzut ce are mai bun arta, și Styx-ul de unde provine aceasta. Am visat să arăt societății române că un artist nu moare, ci trăiește etern."<br />
												<a href="https://www.facebook.com/moldovan.andrei.391">Oi, here I am.</a>
											</p>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="tab2">
										<div className="testimonial-image">
											<img src={ `${PORTRAITS}ale.jpg` } alt="t2" />
										</div>
										<div className="testimonial-text">
											<p>
												"Viața unui om dobândește adevărata semnificație în momentul în care acesta își descoperă vocația și începe să viseze. De aceea, Artisteria dorește să ofere tuturor posibilitatea de a-și experimenteze visul artistic, folosindu-și talentul pentru a descoperi realitatea."<br />
												<a href="https://www.facebook.com/elenaale.pirvu">Aici mă găsiți.</a>
											</p>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="tab3">
										<div className="testimonial-image">
											<img src={ `${PORTRAITS}anca.jpg` } alt="t3" />
										</div>
										<div className="testimonial-text">
											<p>
												"Jonglând cu școala, olimpiada, proiectele și voluntariatele, Artisteria nu a fost niciun moment doar un alt punct pe o listă lungă. A venit ca ceva normal, o gură de aer proaspăt. Chiar dacă sună clișeic, este un proiect de suflet care sper să vă inspire și să vă  ajute să vă redescoperiți."<br />
												<a href="https://www.facebook.com/profile.php?id=100008446957441">Sunt aici.</a>
											</p>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="tab4">
										<div className="testimonial-image">
											<img src={ `${PORTRAITS}cristiana.jpg` } alt="t4" />
										</div>
										<div className="testimonial-text">
											<p>
												"Provocarile îmi dau motivația de zi cu zi. Personal cheia reușitei este formată din implicare și încredere. Astfel, pentru mine Artisteria este provocarea verii. 
												Un proiect ce ne ajută să aprofundăm în mod interactiv propria pasiune."<br />
												<a href="https://www.facebook.com/pruna.cristiana">Ne vedem.</a>
											</p>
										</div>
									</div>
								</div>
								<ul className="nav nav-tabs" role="tablist">
									<li role="presentation" className="active">
										<a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab"></a>
									</li>
									<li role="presentation">
										<a href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab"></a>
									</li>
									<li role="presentation">
										<a href="#tab3" aria-controls="tab3" role="tab" data-toggle="tab"></a>
									</li>
									<li role="presentation">
										<a href="#tab4" aria-controls="tab4" role="tab" data-toggle="tab"></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}