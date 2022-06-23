import * as React from 'react'
export class PaintingCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <img src = {this.props.url}></img>
                <p>{this.props.title}</p>
            </div>
        )
    }

}