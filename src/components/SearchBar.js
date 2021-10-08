import React from "react";

export default class SearchBar extends React.Component{
    state={
        searchTerm:''
    }

    onInputChange=(event)=>{
        this.setState({searchTerm:event.target.value});
    }

    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.searchTerm);
    }

    render(){
        return (
            <div style={{marginTop:'10px'}} className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="ui field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.searchTerm} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}