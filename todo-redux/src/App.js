import React from 'react';
import './App.css';

import Title from './components/Title';
import TodoList from './components/TodoList'

function App() {
  return (
    <>
    <div className="Header">
    <h1>Todo List App</h1>
    <i className="fas fa-check-circle" />
    <h3>Let's Get Organized</h3>
    </div>
    <div className="Intro">
      <h1> Welcome to Your Todo List!</h1>
      {/* <p>In This Todo List you can Customize Your Todo List's name, Check off completed tasks added to your list and up your organization skills with this handy app!</p> */}
      <h3>In This Todo List App You Can:</h3>
      <ul>
        <li>Customize Your Name For Your Todo List By Clicking On The Pencil Icon!</li>
        <li>Stay up To Date By Adding In New Tasks To Your List if Necessary</li>
        <li>Check Off Completed Tasks Added To Your List, Just Click on The Task!</li>
        <li>Don't Want To See The Completed Task Anymore? That's OK just hit DELETE</li>
        <li>Up Your Organization Skills</li>
      </ul>
      <h4>Get Started Below!</h4>
    <div className="App">
      <Title />
      <TodoList />
    </div>
    </div>
    </>
  );
}

export default App;
