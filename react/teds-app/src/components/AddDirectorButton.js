import React from "react";

export class AddDirectorButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue : ''
        }
    }
    updateInputValue(event){
        let value = event.target.value;
        this.setState({
            inputValue : value
        })
    }
    submitDirector(event){
        let name = this.state.inputValue;
        fetch("https://tedsmovies.azurewebsites.net/director", {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify(
                {
                "name":name
            })
        });
    }
    render(){
        return (
            <div>
                <input value = {this.state.inputValue} onInput = {event => this.updateInputValue(event)}></input>
                <button onClick = {event => this.submitDirector(event)}>submit</button>
            </div>
        )
    }
}