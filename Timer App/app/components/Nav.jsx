var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = () => {
  return(
    <div>
      <IndexLink to="/" activeClassName="active">Timer</IndexLink>
      <Link to="/countdown" activeClassName="active">Countdown</Link>
    </div>
  );
};

module.exports = Nav;
