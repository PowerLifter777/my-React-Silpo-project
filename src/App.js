import { Fragment } from 'react';
import { React, useState } from 'react';
import './App.css';
import ContentWrapper from './components/content/ContentWrapper';
import Header from './components/Header';
import LoaderMain from './components/loader_main/LoaderMain';


function App() {

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);


  // const hide = (e) => {
  //   setIsHeaderVisible(false);
  //   setTimeout(() => setIsHeaderVisible(true), 1500);
  //   console.log(isHeaderVisible);
  // }

  let flag;
  let visible1;
  let visible2;
  const hide = () => {
    setIsHeaderVisible(false);
    if (!flag) {
      visible1 = setTimeout(display, 800);
      clear();
      flag = true;
    } if (flag) {
      visible2 = setTimeout(display, 800);
      clear();
      flag = false;

    }
  }

  function clear() {
    if (!flag) {
      clearTimeout(visible2);
    } if (flag) {
      clearTimeout(visible1);
    }
  }

  function display() {
    setIsHeaderVisible(true)
    // console.log(flag);
    flag = false;
  }

  return (
    <Fragment>
      <div className='layout' onWheel={hide}>
        <div
          className="App">
          <Header visible={isHeaderVisible} />
        </div>
        <ContentWrapper />
      </div>
      <LoaderMain />
    </Fragment>
  )
}

export default App;
