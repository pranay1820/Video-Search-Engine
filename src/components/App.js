import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

export default class App extends React.Component{

    state={
        videos:[]
    }

    onSubmit= async (searchTerm)=>{
        const data=await youtube.get('/search',{
            params:{
                q:searchTerm
            }
        })
        this.setState({videos:data.data.items});
    }

    render(){
        console.log(this.state.videos);
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSubmit}/>
            </div>
        );
    }
}