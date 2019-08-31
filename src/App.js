import React from 'react';
import logo from './logo.svg';
import './App.css';

import CommentList from './comment/CommentList'
import CommentInput from './comment/CommentInput'

function onSubmitInfo(params) {
  console.log('=== onSubmitInfo params >>>', params)
}

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>

      <div className='Component-right'>
        <div className='comment-block'>
          <CommentInput onSubmit={onSubmitInfo.bind(this)}/>
          <CommentList/>
        </div>
      </div>
    </div>
  );
}

export default App;
