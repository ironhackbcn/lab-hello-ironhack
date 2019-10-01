import React, { Component } from 'react';

class Article extends Component {
    render () {
        return (
            <article className='flex'>
                <img src= {this.props.image} alt=""/>
                <h3> {this.props.title} </h3>
                <p>Description</p>
            </article>
        );
    };
};


export default Article;