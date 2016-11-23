var data = [
    {
        "id": 1,
        "author": "Atul",
        "text": "This is comment 1."
    },
    {
        "id": 2,
        "author": "Abhishek",
        "text": "abcd"
    },
    {
        "id": 3,
        "author": "test",
        "text": "test"
    }
];

var ProductRow = React.createClass({
  render:function() {
    return(
      <tr>
        <td>{this.props.product.id}</td>
        <td>{this.props.product.author}</td>
        <td>{this.props.product.text}</td>
      </tr>
    );
  }
});

var ProductTable = React.createClass({
  render: function() {
    var filterText = this.props.filterText;
    var rows = this.props.products.map(function(row) {
      if((row.author.toUpperCase().indexOf(filterText.toUpperCase()) == -1) && (row.text.toUpperCase().indexOf(filterText.toUpperCase()) == -1)) {
        return;
      }
      return (
        <ProductRow product={row} key={row.id} />
      );
    });

    return (
      <table>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Comment</td>
        </tr>
        {rows}
      </table>
    );
  }
});

var SearchBar = React.createClass({
  handleChange: function(e) {
    this.props.onUserInput(e.target.value);
  },
  render: function() {
    return(
      <form>
        <input 
          type="text" 
          placeholder="Search" 
          onChange={this.handleChange} 
          value={this.props.filterText}
        />
      </form>
    );
  }
});

var FilterableProductTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: ''
    }
  },

  handleUserInput: function(filterText) {
    this.setState({filterText: filterText});
  },

  render: function() {
    return(
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <ProductTable 
          products={this.props.products} 
          filterText={this.state.filterText}
        />
      </div>
    );
  }
});

ReactDOM.render(
  <FilterableProductTable products={data} />,
  document.querySelector('#content')
);