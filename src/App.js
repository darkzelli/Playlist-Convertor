import React from 'react';
import './App.css';
import User from "./componets/User";

function App(){
  return(
    <div className="app_body">
      <div className="app_container">
        <ul className="app_list">
          <li><User /></li>
        </ul>
      </div>
    </div>
  );
}


export default App;