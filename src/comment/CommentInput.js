/**
 * @Author : HuiWen
 * @Date : 2019-08-31
 * @Description :
 **/

import React, { Component } from 'react'
import './styles.css'

class CommentInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      content: ''
    }
  }

  onInputChange(event) {
    let username = event.target.value
    this.setState({
      username,
    })
  }

  onAreaChange = (event) => {
    let content = event.target.value
    this.setState({
      content
    })
  }

  onSubmitClick() {
    const { onSubmit } = this.props
    const { username, content } = this.state
    const props = {
      username, content
    }
    onSubmit && onSubmit(props)
  }

  render() {
    console.log("===== input props >>>> ",this.props)
    return (
      <div className='comment-input'>
        <div className='comment-input-block'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input value={this.state.username} onChange={this.onInputChange.bind(this)}/>
          </div>
        </div>
        <div className='comment-input-block'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={this.state.content} onChange={this.onAreaChange.bind(this)}/>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.onSubmitClick.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput