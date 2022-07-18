import * as React from 'react'
import {MovieList} from '../components/MovieList'

interface moviePageProps {
    lightMode?:boolean
    // i can add variables here and then the component must use this interfaces variables
    // var1 : number;
    // var2 : string;
    // we avoid the problem we had yesterday where we tried to use the wrong name for our
    // prop variables or passing the wrong type prop variable in
}
interface moviePageState {
    
}
const LightMode = React.createContext('light');
export class MoviePage extends React.Component<moviePageProps, moviePageState>{
    constructor(props:moviePageProps){
        super(props)
    }
    
    render(): React.ReactNode {
        return(
            <div>
                <LightMode.Provider value = 'light'>
                <MovieList/>
                </LightMode.Provider>
            </div>
        )
    }
}