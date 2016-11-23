var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },

  render() {
    var { countdownStatus } = this.props;

    var renderStartStopButton = () => {
      if(countdownStatus === 'started') {
        return <button onClick={this.onStatusChange('paused')}>Pause</button>
      } else {
        return <button onClick={this.onStatusChange('started')}>Start</button>
      }
    };

    return (
      <div>
        { renderStartStopButton() }
        <button onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }

});

module.exports = Controls;
