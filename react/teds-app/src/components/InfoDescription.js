import React from "react";

export class InfoDescription extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <p>{this.props.info}</p>
            </div>
        )
    }
}