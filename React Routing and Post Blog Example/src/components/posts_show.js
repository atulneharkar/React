import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends Component {
	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	render() {
		const { post } = this.props;

		if(!post) {
			return <div>Loading...</div>
		}
		return (
		  <div>
		    <h3>{post.title}</h3>
		    <div>Category: {post.categories}</div>
		    <div>{post.content}</div>
		  </div>
		);
	}
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);