import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import SelectedVideo from "./SelectedVideo";

export default class App extends React.Component{

    state={
        selectedVideo:null,
        videos:[]
    }

    componentDidMount(){
        this.onSubmit('Pavel mavrin');
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
        this.setState({videos:data.data.items,selectedVideo:data.data.items[0]});
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <SelectedVideo video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}