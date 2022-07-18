import * as React from 'react'
import {Link} from 'react-router-dom'
interface navbarProps{

}
interface navbarState {
    
}
export class Navbar extends React.Component<navbarProps, navbarState>{
    constructor(props:navbarProps){
        super(props);

    }
    render(): React.ReactNode {
        return(
            <div>
                <Link to = '/add'>add movies</Link>
                <Link to = '/movies'>movie page</Link>
            </div>
        )
    }
}