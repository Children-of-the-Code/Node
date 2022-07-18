import * as React from 'react'
interface AddMoviePageState{
    inputDirectorIDValue : string
    inputMovieNameValue : string
}
interface AddMoviePageProps{

}
export class AddMoviePage extends React.Component<AddMoviePageProps, AddMoviePageState>{
    constructor(props:AddMoviePageProps){
        super(props)
        this.state = {
            inputDirectorIDValue : '',
            inputMovieNameValue : ''
        }
    }
    render(): React.ReactNode {
        return(<div>
            <p>add movie name:</p>
            <input value = {this.state.inputMovieNameValue} onInput = {event => this.updateMovieName(event)}></input>
            <p>add director id:</p>
            <input value = {this.state.inputDirectorIDValue} onInput = {event => this.updateDirectorID(event)}></input>
            <br></br>
            <button onClick = {event => this.postMovie(event)}>submit</button>
        </div>)
    }
    // type any will make a variable act like javascript variables
    updateDirectorID(event:any){
        let value = event.target.value;
        this.setState(
            {
                inputMovieNameValue : this.state.inputMovieNameValue,
                inputDirectorIDValue : value
            }
        )
    }
    updateMovieName(event:any){
        let value = event.target.value;
        this.setState(
            {
                inputMovieNameValue : value,
                inputDirectorIDValue : this.state.inputDirectorIDValue
            }
        )
    }
    postMovie(event:any){
        fetch('https://tedsmovies.azurewebsites.net/movie/'+this.state.inputDirectorIDValue,
        {
            method:"POST",
            mode:"cors",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body:JSON.stringify({
                "title":this.state.inputMovieNameValue
            })

        })
    }
}