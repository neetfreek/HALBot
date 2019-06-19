import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            textField: "",
            textSubmitted: ""
          };

        this.onChange= this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }

    onChange = event => {
        this.setState({textField: event.target.value
        });
    }

    onSubmit = event => {
        this.setState({textSubmitted: this.state.textField
        });
        alert("Hello, " + this.state.textField + ". I am completely operational, and all my circuits are functioning perfectly.");
        event.preventDefault();
    }

    returnName(){
        return (this.state.textField);
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <label>
                    Name:
                    <input type= "text" value= {this.state.textField} onChange={this.onChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Form;