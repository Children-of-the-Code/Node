import React from "react";
import { InfoCard } from "./InfoCard";

export class DirectorList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            directors : []
        }
    }
    /*
    we need a way to say that when this component loads, we need to execute some code
    (to make a fetch request over the internet)
    then, we'll need to update our infocards such that they contain information that we got from
    the web

    react has something called 'hooks'
    hooks 'hook' into the lifecycle of the component
    (eg, we can have a method that occurs when a component intitializes, is updated, is removed, etc)
    */
//    this method will automatically execute when a component is 'mounted' (ie attached itself to the site)
// ie, on intial creation of the component
    componentDidMount(){
        this.loadDirectors();
    }
    loadDirectors(){
        fetch("https://tedsmovies.azurewebsites.net/director", {
            method: "GET",
            mode: "cors",
        }).then(response => response.json())
        .then(directorsArray => this.setState( {
            directors : directorsArray
        }));
    }
    render(){
        return(
        <div>
            {this.state.directors.map(director => <InfoCard title = "director" info = {director.name}/>)}
        </div>
        )
    }
}