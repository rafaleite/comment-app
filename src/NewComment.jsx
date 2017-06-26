import React, {Component} from 'react'

export default class NewComment extends Component {
    constructor(props) {
        super(props)
        this.handleEnder = this.handleEnder.bind(this)
    }

    handleEnder(event) {
        if(event.keyCode ===13) {
            this.props.postNewComment({
                comment: this.refs.comment.value
            })

            this.refs.comment.value = ''
            event.preventDefault()
        }
        
    }

    render() {
        return (
            <div className="row">
                <textarea ref="comment" required onKeyDown={this.handleEnder} placeholder="Comente!" className="form-control"></textarea>
            </div>
        )
    }
}