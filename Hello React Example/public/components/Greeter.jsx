var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

var Greeter = React.createClass({
	getDefaultProps() {
		return {
			name: 'React',
			message: 'This is a default message.'
		};
	},

	getInitialState() {
		return {
			name: this.props.name,
			message: this.props.message
		};
	},

	handleNewName(name, message) {
		this.setState({
			name: name,
			message: message
		});
	},

	render() {
		const name = this.state.name;
		const message = this.state.message;

		return (
			<div>
				<GreeterMessage name={name} message={message} />
				<GreeterForm onNewName={this.handleNewName} />
			</div>
		);
	}
});

module.exports = Greeter;
