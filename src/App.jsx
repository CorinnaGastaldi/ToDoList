// import logo from './logo.svg';
// import CopyStyle from './components/CopyStyle/CopyStyle'
// import Counter from './components/Counter/Counter'
import TodoList from './components/Todo-list/TodoList';
import './App.css';
import React from 'react'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                { /*
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click button to copy style.
        </p>
        <div className="Button-wrapper">
          <CopyStyle text="Default" />
          <CopyStyle text="Outlined" type="outlined" />
        </div>
        <Counter text="increment"/>
        */ }
                <div className="Todo-list">
                    <h2>
                        To Do List.
                    </h2>
                    <TodoList />
                </div>
            </header>
        </div>
    );
}

export default App;