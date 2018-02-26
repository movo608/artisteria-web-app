import React from 'react'
import $ from 'jquery'

class Flash extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			archetype: props.archetype,
			message: props.message,
			allowed: false
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			archetype: nextProps.archetype,
			message: nextProps.message,
			allowed: nextProps.allowed
		});

		this.state.allowed ? ( 
			$('.alert').removeClass('no-display')
		) : null;
	}

	makeFlashDie() {

	}

	render() {
		return (
			<div className={`alert ${this.state.archetype} ${this.state.allowed ? 'allowed-display' : 'no-display'}`}>
				{ /* onclick="this.parentElement.style.display='none';" */ }
				{/*<span style={{cursor: 'pointer'}} className="closebtn" onClick={() => $('.alert').addClass('no-display') }>&times;</span>*/}
				{ 
					this.state.archetype === 'danger' ? (
						<p><strong>Response error!</strong> The following error occured: { this.state.message }.</p>
					) : (
						<p><strong>Success.</strong></p>
					)
				}
			</div>
		);
	}
}

export default Flash;