import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app__header">
      <h1 className="app__heading" >Todo List</h1>
      <p className="app__txt" >{toDo} more to do, {done} done</p>
    </div>
  );
};

export default AppHeader;
