import * as React from 'react'
interface addToFavoritesButtonProps {
    favoriteButtonClicked : any
}
interface addToFavoritesButtonState {

}
export class AddToFavoritesButton extends React.Component<addToFavoritesButtonProps, addToFavoritesButtonState> {
    constructor(props:addToFavoritesButtonProps){
        super(props);
        this.state = {

        }
    }
    render(): React.ReactNode {
        return (
            <div>
                <button onClick = {event => this.props.favoriteButtonClicked(event)}>favorite</button>
            </div>
        )
    }
}