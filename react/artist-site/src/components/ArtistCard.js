import * as React from 'react';
export class ArtistCard extends React.Component {
    constructor(props){
        // run the constructor of React.Component first
        super(props);

    }
    render(){
        return (
            <div>
                <h3 onClick = {event => this.props.navigateToArtistClick(this.props.name, this.props.artist_ID)}>{this.props.name}</h3>
            </div>
        )
    }
}