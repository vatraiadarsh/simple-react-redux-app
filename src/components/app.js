import React from 'react';
import {Provider} from 'react-redux';
import store from '../store';

import Post from './posts';
import PostForm from './postform';


function App() {
  return (
    <Provider store={store}>
      <div className="container">
      <div className="App">
        <PostForm/>
        <hr/>
        <Post/>      
      </div>
      </div>
    </Provider>
  );
}

export default App;
