import React from "react";
import Project from "./components/Projects/Project";
import './App.css';

function App() {
  return (
    <>
      <div className="app-con">
        <div className="title">
          <h1>
            React
            <span>Filter</span>
          </h1>
        </div>
        <Project />
      </div>
    </>
  );
}

export default App;