import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import CommentList from './comment/CommentList'
import CommentInput from './comment/CommentInput'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
    }
  }

  onSubmitInfo(params) {
    console.log('=== onSubmitInfo params >>>>>', params)
    let comments = this.state.comments
    const {username, content} = params
    const props = {
      user: username,
      content,
    }
    comments.push(props)
    this.setState({
      comments,
    })
  }

  render() {
    const {comments} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>

        <div className='Component-right'>
          <div className='comment-block'>
            <CommentInput onSubmit={this.onSubmitInfo.bind(this)}/>
            <CommentList comments={comments}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
