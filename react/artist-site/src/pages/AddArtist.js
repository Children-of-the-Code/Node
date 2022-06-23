import * as React from 'react';
export class AddArtist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue : ""
        }
    }
    render(){
        return(
            <div>
                <h3>Add artist name:</h3>
                <input type="text" value = {this.state.inputValue} onInput = {event => this.updateInputValue(event)}></input>
                <button onClick = {event=>this.submit(event)}>submit</button>
            </div>
        )
    }
    updateInputValue(event){
        // get the value of the element that caused this event
        // and set state to that value
        let value = event.target.value;
        this.setState({
            inputValue : value
        })
    }
    submit(event){
        let name = this.state.inputValue;
        fetch("https://tedsartists.azurewebsites.net/artist", {
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


}