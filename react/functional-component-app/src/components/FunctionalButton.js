import * as React from 'react';
export function FunctionalButton(props){
    return(<div>
        <button onClick = {event => props.incrementNum()}>increment</button>
    </div>)
}