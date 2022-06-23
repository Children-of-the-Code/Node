import * as React from 'react';
export class AddPainting extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(<div>
            <h3>add artist</h3>
            <input type="text"></input>
            <button>submit</button>
        </div>)
    }

    
}