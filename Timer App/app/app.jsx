var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('./components/Main');
var Timer = require('./components/Timer');
var Countdown = require('./components/Countdown');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={ Main }>
			<Route path="countdown" component={ Countdown } />
			<IndexRoute component={ Timer } />
		</Route>
	</Router>,
	document.getElementById('app')
);
