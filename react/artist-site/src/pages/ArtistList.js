import * as React from 'react';
import { ArtistCard } from '../components/ArtistCard';
import { ArtistPage } from './ArtistPage';

// plan: artist list - clickable list of artists (lets say for a museum directory)
// artist page - a page containing all of an artists paintings
// add artist page
// add painting page

export class ArtistList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            artists : [],
            currentArtist : '',
            currentArtist_ID : 0
        }
    }
    componentDidMount(){
        fetch("https://tedsartists.azurewebsites.net/artist")
        .then(response => response.json())
        .then(artistArray => this.setState({artists:artistArray}));
    }
    // componentDidUpdate is a hook that will execute every time the component does some re-render
    componentDidUpdate(){
        // console.log(this.state)
    }
    render(){
        return(
            <div className='row'>
                {/* map all items in my artist array to artistCard items */}
                <div className='column'>
                    {/* let's bind a method to this component and send the method to a child component,
                    the child component will be able to send information back to this component */}
                {this.state.artists.map(artist=> <ArtistCard name={artist.name} artist_ID = {artist.artist_ID} navigateToArtistClick = {this.navigateToArtist.bind(this)} ></ArtistCard>)}
                </div>
                <div className='column'>
                    <ArtistPage currentArtist = {this.state.currentArtist} artist_ID = {this.state.currentArtist_ID}/>
                </div>
            </div>
        );
    }
    navigateToArtist(name, id){
        console.log(name);
        // I want to navigate to the artist i clicked on
        this.setState({
            artists:this.state.artists,
            currentArtist:name,
            currentArtist_ID:id
        })
    }
}