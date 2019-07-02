import React from 'react';

import Header from './Header';
import NameDisplay from './NameDisplay';
import Form from './Form';
import Click from './Click';
import Image from './Image';
import Test from './Tests//Test';
import RecipeDisplay from './Tests//RecipeDisplay';

const styleApp = {
  textAlign: 'center',
  color: '#fff9ed',
  background: '#252422',
};

const linkHalStart = "http://cdn1us.denofgeek.com/sites/denofgeekus/files/2018/04/2001-a-space-odyssey.jpg";
const linkHalEnd = "https://i.ytimg.com/vi/NJ-CcFcM9Hw/maxresdefault.jpg";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      nameInput: "",
      nameSubmitted: "",
      linkHalCurrent: linkHalStart,
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleChange = event => {
    this.setState({nameInput: event.target.value
    });
  };

  handleClick = event => {
    this.setState({linkHalCurrent: linkHalEnd      
    });
  }

  render(){
    return(
      <div onChange={this.handleChange} style={styleApp} onClick={this.handleClick}>      
        <Header/>  
        <Test/>
        <RecipeDisplay/>
        {/* <Form/>
        <Click/>      
        <NameDisplay text={this.state.nameInput}/>
        <Image link = {this.state.linkHalCurrent}/> */}
      </div>
    );
  }
}

export default App;