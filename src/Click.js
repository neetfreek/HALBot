import React from 'react';

const daveTextStart = "Open the pod bay doors, HAL";
const daveTextEnd = "What’s the problem?";
const halDefault = "I’ve just picked up a fault in the AE35 unit. It’s going to go 100% failure in 72 hours.";
const halTextStart = "I’m sorry, Dave. I’m afraid I can’t do that.";
const halTextEnd = "I think you know what the problem is just as well as I do.";

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
       if (stateNew === true){
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