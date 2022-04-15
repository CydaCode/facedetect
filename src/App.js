import React, {Component}from 'react'
import SignOut from './components/SignOut/SignOut'
import Logo from './components/Logo/Logo';
import ImageInput from './components/ImageInput/ImageInput';
import Rank from './components/Rank/Rank';
import 'animate.css';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <SignOut />
        <Logo />
        <Rank />
        <ImageInput />
        {/* {<ImageDetect />} */}
      </div>
    );
  }
  
}

export default App;
