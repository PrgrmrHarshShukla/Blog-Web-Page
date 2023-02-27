import React from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Content";
import Background from "./Background";

class App extends React.Component {

  render(){  
     return (
       <div className = "mainContent">
         <Background />
         <Header />
         <Content />
       </div>
     );
  } 
}

export default App;
