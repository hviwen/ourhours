/**
 * @Author : HuiWen
 * @Date : 2019-08-31
 * @Description :
 **/

import React, {Component, PureComponent} from 'react'
import './styles.css'

const comments = [
  {user: 'Alice', content: 'hello'},
  {user: 'Jone', content: 'hi'},
]

class Comment extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      item: {
        user, content
      }
    } = this.props

    return (
      <div className='comment'>
        <span>{user} </span>：
        <p>{content}</p>
      </div>
    )
  }
}

class CommentList extends Component {
  static defaultProps = {
    comments,
  }

  constructor(props) {
    super(props)
    this.state = {
      comments,
    }
  }

  render() {
    const {comments} = this.props
    return (
      <div>
        {
          comments && comments.map((item, index) => {
            return (
              <Comment key={`${index}-item`} item={item}/>
            )
          })
        }
      </div>
    )
  }
}

export default CommentList
