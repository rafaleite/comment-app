import React, { Component } from 'react'

export default class Comment extends Component {

    render() {
        return (
            <p className="well" key={this.props.comment}>{this.props.comment}</p>
        )
    }
}