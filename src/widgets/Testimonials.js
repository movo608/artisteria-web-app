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
												"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.
												Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.
												Lorem ipsum dolor sit amet, consectetur..."<br />
												<a href="#">Lorem Ipsum, dolor.co.uk</a>
											</p>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="tab2">
										<div className="testimonial-image">
											<img src={ `${PORTRAITS}ale.jpg` } alt="t2" />
										</div>
										<div className="testimonial-text">
											<p>
												"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
												ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
												lobortis nisl ut aliquip ex ea commodo consequat..."<br />
												<a href="#">Minim Veniam, nostrud.com</a>
											</p>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="tab3">
										<div className="testimonial-image">
											<img src={ `${PORTRAITS}anca.jpg` } alt="t3" />
										</div>
										<div className="testimonial-text">
											<p>
												"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.
												Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.
												Lorem ipsum dolor sit amet, consectetur..."<br />
												<a href="#">Lorem Ipsum, dolor.co.uk</a>
											</p>
										</div>
									</div>
									<div role="tabpanel" className="tab-pane fade" id="tab4">
										<div className="testimonial-image">
											<img src={ `${PORTRAITS}cristiana.jpg` } alt="t4" />
										</div>
										<div className="testimonial-text">
											<p>
												"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
												ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
												lobortis nisl ut aliquip ex ea commodo consequat..."<br />
												<a href="#">Minim Veniam, nostrud.com</a>
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