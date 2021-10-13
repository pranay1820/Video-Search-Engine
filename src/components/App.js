import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

export default class App extends React.Component{

    state={
        selectedVideo:null,
        videos:[]
    }

    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video});
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
        console.log(this.state.selectedVideo);
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSubmit}/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        );
    }
}