import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <label>
          Diamond Name:
          <input type="text" name="name" />
        </label>

        <label>
          Diamond Description:
          <input type="text" name="name" />
        </label>
        
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
