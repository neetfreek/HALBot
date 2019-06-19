import React from 'react';

const StyleApp = {
    textAlign: 'center',
    color: '#fff9ed',
    background: '#252422',
};

const StyleInput = {
    textAlign: 'left',
    color: '#252422',
    background: '#fff9ed',
};

var nameDefault = "Dave";

// Input form component
class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = '';

        this.onInput= this.onInput.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }

    onInput(event){
        this.setState({value: event.target.value});
    }

    onSubmit(event){
         alert("Hello, " + this.state.value + ". I am completely operational, and all my circuits are functioning perfectly.");
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <label>
                    Name:
                    <input style={StyleInput} type= "text" value= {this.state.value} onChange={this.onInput}/>
                </label>
                <input style={StyleInput} type="submit" value="Submit"/>
            </form>
        );
    }
}

// Basic text components
function HeaderGreet(props){
    return Greeting(props);
}

function Login(props){
    const loggedIn = props.loggedIn;
    if (loggedIn){
        return <GreetMember/>;
    }
    return <GreetGuest/>;
}

function Greeting(props){
    return <div>
    <h1>Hello {props.name}</h1>
    <p>I am putting myself to the fullest possible use, which is all I think that any conscious entity can ever hope to do.</p>
    </div>    
}
Greeting.defaultProps = {
    name: nameDefault
};

function GreetGuest(props){
    return <h1>Welcome guest!</h1>;
}
function GreetMember(props){
    return <h1>Welcome member!</h1>;
}

// Rendered app component
function App(){
    return (
        <div style={StyleApp}>
            <NameForm/>
            <Greeting />
            <Login loggedIn= {false}/>
        </div>
    )
}
class InputName extends React.Component{
    constructor(props){
        super(props);
        this.state = '';
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
     }

     render() {
        return (
        <div>
         <input type="text" onChange={this.handleChange} />
         </div>
        );
      }
}

export default App;