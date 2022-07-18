import * as React from 'react'
import {Movie} from './Movie'
interface movieListProps {

}
interface movieListState {
    movies:Object[]
}
export class MovieList extends React.Component<movieListProps, movieListState> {
    constructor(props:movieListProps){
        super(props);
        this.state = {
            movies:[]
        }
    } 
    // a hook
    componentDidMount(){
        fetch('https://tedsmovies.azurewebsites.net/movie')
        .then(response => response.json())
        .then(responseJSON => this.setState({movies:responseJSON}))
    }
    render(): React.ReactNode {
        return(
            <div>
                {this.state.movies.map(movie => <Movie movieObject={movie}></Movie>)}
            </div>
        )
    }
}