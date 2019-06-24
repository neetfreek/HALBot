import React from 'react';
import dataLines from './data/lines';

var lines = dataLines;

const daveTextStart = lines.daveTextStart;
const daveTextEnd = lines.daveTextEnd;
const halDefault = lines.halDefault;
const halTextStart = lines.halTextStart;
const halTextEnd = lines.halTextEnd;


class Click extends React.Component {
    constructor(props) {
       super(props);
       
       this.state = {
          clicked: halDefault,
          textButton: daveTextStart,
          clickedBool: false,
       }
       this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
       const stateNew = !this.state.clickedBool;
       this.setState({clickedBool: !this.state.clickedBool})
       if (stateNew == true){
         this.setState({clicked: halTextStart})
         this.setState({textButton: daveTextEnd})
       }
       else {
         this.setState({clicked: halTextEnd})
         this.setState({textButton: daveTextStart})
       }       
    }

    render() {
       return (
          <div>
             <button onClick= {this.handleClick}> {this.state.textButton}</button>
             <h4>{this.state.clicked}</h4>
          </div>
       );
    }
 }

 export default Click;