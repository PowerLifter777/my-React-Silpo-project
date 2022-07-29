import { React, useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const hide = () => {
    setIsHeaderVisible(false);
    setTimeout(() => setIsHeaderVisible(true), 1000);
    console.log(isHeaderVisible);
  }


  // const hide = (e) => {


  //   let count = e.timeStamp;
  //   setIsHeaderVisible(false);
  //   let delta = e.timeStamp;
  //   // let delta = 1000;
  //   // count = e.timeStamp - count < delta? e.timeStamp : count;   
  //   setTimeout(() => setIsHeaderVisible(true), 1000);
  //   // console.log(`count ${e.timeStamp}, delta ${delta}`);
  //   console.log(e);
  // }
  // let scroll = false;
  // let count1;
  // const hide = (e) => {
  //   // let count1 = new Date().getTime();
  //   scroll = true;
  //   setIsHeaderVisible(false);

  //   setTimeout(() => {
  //     scroll = false;
  //   }, 1000);
  //   // console.log(isHeaderVisible);




  //   setTimeout(() => {
  //     if (!scroll) {
  //       setIsHeaderVisible(true);
  //     } else {
  //       scroll = true
  //     }
  //   }, 1000);
  // }








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
