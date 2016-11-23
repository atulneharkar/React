import React, { Component} from 'react';
//above syntax is same as const Component = React.Component;

// const SearchBar = () => {
// 	return <input />;
// }

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
  	//return <input onChange={this.onInputChange} />
  	//error function
    return (
    	<div>
    	  <input 
    	  value={this.state.term}
    	  onChange={event=>this.onInputChange(event.target.value)} />
    	  
    	</div>
    );
  }
  // above can be written as onChange={(event) => this.setState({term: event.target.value})} />

  onInputChange(term) {
  	this.setState({term});
  	this.props.onSearchTermChange(term);
  }
}

export default SearchBar;