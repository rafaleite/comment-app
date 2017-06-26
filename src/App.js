import React, { Component } from 'react'
import NewComment from  './NewComment'
import Comments from './Comments'
import 'bootstrap-css-only'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: {
        '1': {
          comment: 'first comment'
        },
        '2': {
          comment: 'second comment'
        }
      }
    }

    this.postNewComment = this.postNewComment.bind(this)

  }

  postNewComment(comment) {
    const comments = {...this.state.comments}
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment

    this.setState({
      comments: comments
    })
  }

  render() {
    return (
      <div className="container">
        <NewComment postNewComment={this.postNewComment} />
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;