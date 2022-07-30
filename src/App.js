import { React, useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);


  const hide = (e) => {
    setIsHeaderVisible(false);
    setTimeout(() => setIsHeaderVisible(true), 1500);
    console.log(isHeaderVisible);
  }



  return (
    <div
      className="App"
      onWheel={hide}
    >
      <Header visible={isHeaderVisible} />
    </div>
  )
}

export default App;
