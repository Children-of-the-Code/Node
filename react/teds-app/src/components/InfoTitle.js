import React from "react";

export class InfoTitle extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}