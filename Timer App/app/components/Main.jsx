var React = require('react');
var Nav = require('./Nav');

var Main = (props) => {
  return (
    <div>
      <Nav />
      <p>Main Component</p>
      { props.children }
    </div>
  );
};

module.exports = Main;
