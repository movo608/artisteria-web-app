import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import $ from 'jquery'

// import DatePicker
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import xthedreammadeofstonemadeofstonemademehurtthispainkeepsalivedisapearswithoutatracetherearetwosidesinthisdreammadeofstoneonesideofthisdreamdisapearedimgonnacatchtheotherdreammadeofstonemademealiveiwasbyyoursidesomanytimesilovedyoumoreyoucouldeverknewyoualwayswereonbymysidedreammadeofstonemademefeelalivesomanyyearsmynamesinfinitythedreammadeofstonemadeofstonemademestrongthisgainkeepsaliveappearswithoutatracetherearetwosidesinthisdreammadeofstoneyouwillnevergettwosidesofadreamlooseonesideofastonewinanotherdreammadeofstonemademealiveiwasbyyoursidesomanytimesilovedyoumoreyoucouldeverknewyoualwayswereonbymysidedreammadeofstonemademefeelalivesomanyyearsmynamesinfinitydreammadeofstonemademealiveiwasbyyoursidesomany from 'moment'

// import Select
import Select from 'react-select'
import 'react-select/dist/react-select.css'

//import action
import { submitForm } from '../actions'

//import flash message
import Flash from '../widgets/Flash'

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			birth: xthedreammadeofstonemadeofstonemademehurtthispainkeepsalivedisapearswithoutatracetherearetwosidesinthisdreammadeofstoneonesideofthisdreamdisapearedimgonnacatchtheotherdreammadeofstonemademealiveiwasbyyoursidesomanytimesilovedyoumoreyoucouldeverknewyoualwayswereonbymysidedreammadeofstonemademefeelalivesomanyyearsmynamesinfinitythedreammadeofstonemadeofstonemademestrongthisgainkeepsaliveappearswithoutatracetherearetwosidesinthisdreammadeofstoneyouwillnevergettwosidesofadreamlooseonesideofastonewinanotherdreammadeofstonemademealiveiwasbyyoursidesomanytimesilovedyoumoreyoucouldeverknewyoualwayswereonbymysidedreammadeofstonemademefeelalivesomanyyearsmynamesinfinitydreammadeofstonemademealiveiwasbyyoursidesomany(),
			location: '',
			study: '',
			phone: '',
			domain: '',
			email: '',
			facebook: '',
			instagram: '',
			motivation: '',
			work_link: '',
			projects_link: '',
			availability: '',
			accommodation: '',
			hobbies: '',
			found_out: '',
			about_you: '',
			allow_message: false,
			message_message: '',
			message_archetype: ''
		}

		this.bindFunctions();
	}

	bindFunctions() {
		this.submitForm 				= this.submitForm.bind(this);
		this.handleNameChange 			= this.handleNameChange.bind(this);
		this.handleDateChange 			= this.handleDateChange.bind(this);
		this.handlePhoneChange 			= this.handlePhoneChange.bind(this);
		this.handleStudyChange 			= this.handleStudyChange.bind(this);
		this.handleLocationChange 		= this.handleLocationChange.bind(this);
		this.handleDomainChange 		= this.handleDomainChange.bind(this);
		this.handleEmailChange			= this.handleEmailChange.bind(this);
		this.handleFacebookChange		= this.handleFacebookChange.bind(this);
		this.handleInstagramChange		= this.handleInstagramChange.bind(this);
		this.handleDomainChange			= this.handleDomainChange.bind(this);
		this.handleProjectsChange		= this.handleProjectsChange.bind(this);
		this.handleWorkChange			= this.handleWorkChange.bind(this);
		this.handleMotivationChange 	= this.handleMotivationChange.bind(this);
		this.handleHobbiesChange		= this.handleHobbiesChange.bind(this);
		this.handleAboutChange			= this.handleAboutChange.bind(this);
		this.handleFoundChange			= this.handleFoundChange.bind(this);
		this.handleAccommodationChange 	= this.handleAccommodationChange.bind(this);
		this.handleAvailableChange 		= this.handleAvailableChange.bind(this);
	}

	componentDidMount() {
		$('input, textarea').attr('required', true);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			message_message: nextProps.submittedForm.data
		});

		if (nextProps.submittedForm.status === true) {
			$('#form .inner').fadeOut('slow');
			
			this.setState({ 
				message_archetype: 'success'
		 	});
		 } else { 
			this.setState({ message_archetype: 'danger' });
		 }
	}

	submitForm(event) {
		event.preventDefault();
		this.props.submitForm(this.state);

		this.setState({ 
			allow_message: true
		});

		$('html, body').animate({
			scrollTop: $('#form').offset().top
		}, 1500);
	}

	handleAccommodationChange(accommodation) {
		this.setState({ accommodation: accommodation.value });
	}

	handleAvailableChange(availability) {
		this.setState({ availability: availability.value });
	}

	handleNameChange(event) {
		this.setState({ name: event.target.value });
	}

	handleDateChange(date) {
		this.setState({ birth: date });
	}

	handleLocationChange(event) {
		this.setState({ location: event.target.value });
	}

	handleStudyChange(event) {
		this.setState({ study: event.target.value });
	}

	handlePhoneChange(event) {
		this.setState({ phone: event.target.value });
	}

	handleEmailChange(event) {
		this.setState({ email: event.target.value });
	}

	handleFacebookChange(event) {
		this.setState({ facebook: event.target.value });
	}

	handleInstagramChange(event) {
		this.setState({ instagram: event.target.value });
	}

	handleDomainChange(domain) {
		this.setState({ domain: domain.value });
	}

	handleWorkChange(event) {
		this.setState({ work_link: event.target.value });
	}

	handleMotivationChange(event) {
		this.setState({ motivation: event.target.value });
	}

	handleProjectsChange(event) {
		this.setState({ projects_link: event.target.value });
	}

	handleHobbiesChange(event) {
		this.setState({ hobbies: event.target.value });
	}

	handleAboutChange(event) {
		this.setState({ about_you: event.target.value });
	}

	handleFoundChange(found) {
		this.setState({ found_out: found.value });
	}

	render() {
		return (
			<div>
				<section className="wrapper style2" id="form">
					<Flash allowed={ this.state.allow_message } message={ this.state.message_message } archetype={ this.state.message_archetype }/>
					<div className="inner">
						<header>
							<h2>Apply Now!</h2>
							<p className="contact-sub">
								*All the private information one submits will be treated according to privacy laws and regulations and shall not be displayed publicly.
								**All fields are required.
							</p>
						</header>
						<div className="custom-form">
							<form onSubmit={ this.submitForm }>
								<div className="row uniform">
									<div className="6u 12u$(small)">
										<label>
											First Name and Surname
											<input name="name" type="text" value={ this.state.value } onChange={ this.handleNameChange } />
										</label>
									</div>
									<div className="6u 12u$(small)">
										<label>
											Date of Birth
											<DatePicker
												selected={ this.state.birth }
												onChange={ this.handleDateChange }
											/>
										</label>
									</div>
									<div className="6u 12u$(small)">
										<label>
											City and County / Region
											<input name="location" type="text" value={ this.state.value } onChange={ this.handleLocationChange } />
										</label>
									</div>
									<div className="6u 12u$(small)">
										<label>
											Current Study
											<input name="study" type="text" value={ this.state.value } onChange={ this.handleStudyChange } placeholder="Where are you currently studying?" />
										</label>
									</div>
									<div className="6u 12u$(small)">
										<label>
											Phone Number
											<input name="phone" type="text" value={ this.state.value } onChange={ this.handlePhoneChange } />
										</label>
									</div>
									<div className="6u 12u$(small)">
										<label>
											E-mail Address
											<input name="email" type="email" value={ this.state.value } onChange={ this.handleEmailChange } />
										</label>
									</div>
									<div className="6u 12u$(small)">
										<label>
											Facebook Link
											<input name="facebook" type="text" value={ this.state.value } onChange={ this.handleFacebookChange } placeholder="Copy paste the link." />
										</label>
									</div>
									<div className="6u 12u$(small)">
										<label>
											Instagram Link
											<input name="instagram" type="text" value={ this.state.value } onChange={ this.handleInstagramChange } placeholder="Copy paste the link." />
										</label>
									</div>
									<div className="12u 12u$(small)" id="react-select-domain select-domain-name_%domain">
										<label>
											Choose your domain
											<Select 
												name="domains"
												value={ this.state.domain }
												onChange={ this.handleDomainChange }
												options={[
													{ value: 'Actorie', label: 'Actorie' },
													{ value: 'Dans', label: 'Dans' },
													{ value: 'Arte Vizuale', label: 'Arte Vizuale' },
													{ value: 'Foto / Film', label: 'Foto / Film' }
												]}
											/>
										</label>
									</div>
									<div className="12u 12u$(small)">
										<label>
											Your Motivation
											<textarea onChange={ this.handleMotivationChange } value={ this.state.value } name="motivation" type="text" cols="20" placeholder="What is your motivation? Why do you want to be here?"></textarea>
										</label>
									</div>
									<div className="12u 12u$(small)">
										<label>
											Show us your work
											<textarea onChange={ this.handleWorkChange } value={ this.state.value } name="work" type="text" cols="20" placeholder="Please provide links to your pieces of art / work."></textarea>
										</label>
									</div>
									<div className="12u 12u$(small)">
										<label>
											Tell us where you've worked
											<textarea onChange={ this.handleProjectsChange } value={ this.state.value } name="projects" type="text" cols="20" placeholder="Please provide links to the projects you've taken part in."></textarea>
										</label>
									</div>
									<div className="6u 12u$(small)">
										<label>
											Will you be available during 31st of August - 2nd of September?
											<Select 
												name="available"
												value={ this.state.availability }
												onChange={ this.handleAvailableChange }
												options={[
													{ value: 'Yes', label: 'Yes' },
													{ value: 'No', label: 'No' }
												]}
											/>
										</label>
									</div>
									<div className="6u 12u$(small)">
										<label>
											Will you have accommodation during that time?
											<Select 
												name="accommodation"
												value={ this.state.accommodation }
												onChange={ this.handleAccommodationChange }
												options={[
													{ value: 'Yes', label: 'Yes' },
													{ value: 'No', label: 'No' }
												]}
											/>
										</label>
									</div>
									<div className="6u 12u$(small)">
										<label>
											Tell us your hobbies
											<input name="hobbies" type="text" onChange={ this.handleHobbiesChange } value={ this.state.value } />
										</label>
									</div>
									<div className="6u 12u$(small)">
										<label>
											Tell us how you found out about us
											<Select 
												name="found_out"
												value={ this.state.found_out }
												onChange={ this.handleFoundChange }
												options={[
													{value: 'Friends / Family', label: 'Friends / Family'},
													{value: 'Social Networks', label: 'Social Networks'},
													{value: 'Other', label: 'Other'}
												]}
											/>
										</label>
									</div>
									<div className="12u 12u$(small)">
										<label>
											Tell us something about you
											<input name="about" type="text" onChange={ this.handleAboutChange } value={ this.state.value } />
										</label>
									</div>
									<div className="3u 3u$(small)">
										<input name="submit" type="submit" />
									</div>
								</div>
							</form>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ submitForm }, dispatch);
}

const mapStateToProps = (state) => {
	return {
		submittedForm: state.submittedForm.submittedForm
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);