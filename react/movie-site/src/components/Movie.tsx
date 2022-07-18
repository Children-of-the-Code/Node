import * as React from 'react';
import { AddToFavoritesButton } from './AddToFavoritesButton';
import {Director} from './Director'
interface movieProps {
    // movieObject:Object
    movieObject:any
}
interface movieState {
    favorite:boolean
}
export class Movie extends React.Component<movieProps, movieState>{
    constructor(props:movieProps){
        super(props);
        this.state = {
            favorite : false
            // I need to follow the layout of movieState, otherwise TS will refuse to compile
        }
    }
    render(): React.ReactNode {
        return(
            <div>
                <h3>{this.props.movieObject.title}</h3>
                <Director directorObject={this.props.movieObject.director}></Director>
                <AddToFavoritesButton favoriteButtonClicked={this.favoriteButtonClicked.bind(this)}></AddToFavoritesButton>
                {this.state.favorite ? <p>favorited</p> : <p>not favorited</p>}
            </div>
        )
    }
    favoriteButtonClicked(){
        // ! = opposite of boolean
        let newFavoriteValue = !(this.state.favorite);
        this.setState({favorite:newFavoriteValue})
    }
}