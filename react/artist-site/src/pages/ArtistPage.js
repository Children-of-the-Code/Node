import * as React from 'react';
import { PaintingList } from '../components/PaintingList';
export class ArtistPage extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <h1>{this.props.currentArtist}</h1>
                {/* changing key of react component will remount the component */}
                <PaintingList key = {this.props.artist_ID} artist_ID={this.props.artist_ID}></PaintingList>
            </div>
        )
    }
}