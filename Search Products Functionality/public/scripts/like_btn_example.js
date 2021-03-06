class LikeButton extends React.Component {

  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({liked: !this.state.liked});
  }
  

  render() {
    const text = this.state.liked ? 'liked': 'have not liked';
    return(
      <div onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </div>
    );
  }
}

ReactDOM.render(
  <LikeButton />, document.getElementById('like-example')
);