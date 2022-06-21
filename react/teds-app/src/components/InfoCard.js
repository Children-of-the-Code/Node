// React has both class-based components and function components
// (a component can be either a class or a function)
// most examples you see will be a function component - 
// however, for the purpose of demonstration I find class components to have a more
// obvious syntax

import * as React from 'react';
import { InfoDescription } from './InfoDescription';
import { InfoTitle } from './InfoTitle';
/*
A component in react has a mix of information between 'props' and 'state'
'props' are properties that are passed in to the component - they are immutable
'state' is a component's way of keeping track of its own values that change

why can't we just use regular variables as part of our html?
a simple question with a long answer
it has to with how react is actually changing the website - 
there is of course the html that is actually displayed on the site - 
but react also keeps track of a virtual DOM (dom = document object model, the structure of all elements on the page)
react doesn't know to automatically update the site if we were using regular js variables as part of the html
however, the workaround is to use a specific store of information (state) that react know to draw from
as well as using a specific method that triggers a redraw of the site (setstate method automatically triggers a rerender)

the result?
if we were not using state, our values displayed on the site may be totally outdated based off user input
by using setstate, our values will always be up to date

it all depends on timing when we redraw the site
*/
export class InfoCard extends React.Component {
    constructor(props) {
        // because we're overwriting the parent class's constructor (React.Component),
        // we first need to run its constructor
        super(props);
        this.state = 
        {
            numClicks:0
        }
        // bind attaches a method to an object
        this.updateCount = this.updateCount.bind(this);
    }

    updateCount(){
        // alert("button clicked");
        let newNumClicks = this.state.numClicks + 1;
        this.setState(
            {
                numClicks: newNumClicks
            }
        )
    }

    // in a class componenet, you must have a render method
    // the render method is where we put the HTML of a component
    render(){
        return(
            <div className = "column">
                <InfoTitle title = {this.props.title} />
                <InfoDescription info = {this.props.info}/>
                <button onClick = {this.updateCount} >{this.state.numClicks}</button>
            </div>
        )
    }
}