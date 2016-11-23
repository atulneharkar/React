var React = require('react');
var Clock = require('./Clock');
var Controls = require('./Controls');

var Timer = React.createClass({
  getInitialState() {
    return {
      count: 0,
      timerStatus: 'stopped'
    }
  },

  componentDidUpdate(prevProps, prevState) {
    if(this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.handleStart();
          break;

        case 'stopped':
          this.setState({ count: 0 });

        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;

      }
    }
  },

  componentWillUnmount() {
    clearInterval(this.timer);
  },

  handleStart() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  },

  handleStatusChange(newTimerStatus) {
    this.setState({ timerStatus: newTimerStatus });
  },

  render() {
    var { count, timerStatus } = this.state;

    return (
      <div>
        <h2>Timer App</h2>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
});

module.exports = Timer;
