var React = require('react');

var GreeterForm = React.createClass({
	onFormSubmit(e) {
    e.preventDefault();

		var name = this.refs.name.value;
		var message = this.refs.message.value;

		if(message.length > 0 && name.length > 0) {
			this.refs.name.value = '';
			this.refs.message.value = '';
			this.props.onNewName(name, message);
		}
	},

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="name" />
				<textarea ref="message"></textarea>
				<button>Set Name and Message</button>
			</form>
		);
	}
});

module.exports = GreeterForm;
