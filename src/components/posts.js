import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';


class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nxtProps){
        if(nxtProps.newPost){
            this.props.posts.unshift(nxtProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <div className="alert alert-success" role="alert">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                </div>
           
            </div>
        ));

        return (
            <div>
               <div className="page-header">
                    <h1> All Added Posts</h1>
                </div>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};


const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Posts);