import React from "react";
import API from "../../utils/API";

import BookEntry from "../bookEntry";

class Search extends React.Component {
    state= {
        books: [],
        title : "",
        author : "",
        error: ""
    }

    onChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    submit = event => {
        event.preventDefault();
        API.searchBooks(this.state.title,this.state.author).then(response => {
            console.log(response.data.items[0])
            this.setState({books: response.data.items});
        }).catch(error => {
            this.setState({
                error: error.message
            })
        })
    }

    render () {
        return (
            <div>
            <div className = "row search">
                <div className = "col-12">
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" 
                            className="form-control" 
                            id="title" 
                            placeholder="Enter title"
                            value = {this.state.title}
                            name = "title"
                            onChange = {this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" 
                            className="form-control" 
                            id="author" 
                            placeholder="Enter author"
                            value = {this.state.author}
                            name ="author"
                            onChange = {this.onChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onSubmit={this.submit}>Submit</button>
                    </form>
                </div>
            </div>
            <h1>Results</h1>
            <div className="row results">
                <div className = "col-12">
                    {this.state.books.map((book,i) => {
                        const info = book.volumeInfo;
                        //sometimes they don't have image links
                        const imageLinks = info.imageLinks || {thumbnail:"https://via.placeholder.com/150"}
                        return (<BookEntry 
                            key = {info.title}
                            id = {i}
                            link = {info.infoLink}
                            //sometimes there are no authors
                            authors = {info.authors|| ["unknown"]}
                            description = {info.description}
                            image = {imageLinks.thumbnail}
                            title = {info.title}
                        
                        />)
                    })}
                </div>
            </div>
            </div>
        )
    }

}

export default Search;