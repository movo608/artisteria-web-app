import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//import actions
import { getTestimonials } from '../actions'

class TestimonialsPage extends Component {
	componentDidMount() {

	}

	render() {
		return (
			<div></div>
		);
	}
}

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getTestimonials }, dispatch);
}

export default connect()(TestimonialsPage)