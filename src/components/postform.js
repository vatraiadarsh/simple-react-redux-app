import React, { Component } from 'react';
import ProtoTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from '../actions/postActions';


class PostForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            body:''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const post = {
            title: this.state.title,
            body:this.state.body
        }

        this.props.createPost(post);

    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <h1>Add Post</h1>
                </div> 
                <form onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" placeholder="Please Enter the title" required name="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <div>
                        <label>Post</label>                 
                        <textarea name="body" className="form-control" placeholder="Please enter some post" required onChange={this.onChange} value={this.state.body} />     
                    </div>
                    <br/>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost:ProtoTypes.func.isRequired
}

export default connect(null,{createPost})(PostForm);