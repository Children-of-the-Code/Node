import * as React from 'react'
import { PaintingCard } from './PaintingCard'
export class PaintingList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            paintings : []
        }
    }
    // when the paintingList mounts, let's get all the paintings using a artist name that we pass in as a prop
    
    // let's console log every time the component re renders (this is a hook)
    componentDidMount(){
        this.updatePaintingsArray();
    }
    updatePaintingsArray(){
        console.log('artist id: ' +this.props.artist_ID);
        console.log('https://tedsartists.azurewebsites.net/painting/'+this.props.artist_ID)
        if(this.props.artist_ID){
            console.log('getting api info for paintings');
            fetch('https://tedsartists.azurewebsites.net/painting/'+this.props.artist_ID)
            .then(response => response.json())
            .then(paintingsArray => {
                console.log(paintingsArray);
                this.setState({paintings:paintingsArray})
            }
                )
        }
    }
    render(){
        return (
            <div>
                {this.state.paintings.map(painting => <PaintingCard url = {painting.url} title = {painting.title}></PaintingCard>)}
            </div>
        )
    }
}