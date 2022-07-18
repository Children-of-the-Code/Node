import * as React from 'react'
interface directorProps {
    directorObject : any
}
interface directorState {

}
export class Director extends React.Component<directorProps, directorState> {
    constructor(props:directorProps){
        super(props)
        this.state = {

        }
    }
    render(): React.ReactNode {
        return(
            <div>
                {this.props.directorObject.name}
            </div>
        )
    }
}
/*
@Something above a class variable method etc
decorators are the exact same thing as annotations in java
*/