var React = require('react');

var CountdownForm = React.createClass({
  onFormSubmit(e) {
    e.preventDefault();

    var totalSeconds = this.refs.seconds.value;

    if(totalSeconds && totalSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(totalSeconds, 10));
    } else {
      this.refs.seconds.value = '';
      alert('Please enter a valid number');
    }
  },

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onFormSubmit}>
          <input type="text" ref="seconds" placeholder="Time in Seconds" />
          <button type="submit">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
