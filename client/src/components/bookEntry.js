import React, {Component} from "react";
import API from "../utils/API";

class BookEntry extends Component {
    state = {
        saved: false
    }

    listAuthors = authors => {
        let newAuthors = authors[0]
        for (let i =1; i < authors.length; i++) {
            newAuthors += ", " + authors[i];
        }
        return newAuthors;
    }

    saveBook = () => {
        API.saveBook(this.props).then(response => {
            console.log(response);
            this.setState({saved:true});
        }).catch(error => {
            console.log(error);
        })
    }

    render (props) {
        const {title,authors,description,image,link} = this.props;
        return (<article className = "book-entry row">
            <div className = "col-9">
                <h3>{title}</h3>
                <h5>{this.listAuthors(authors)}</h5>
            </div>
            <div className = "col-3">
                <button onClick={()=>window.location.href=link}>View</button>
                {!this.state.saved &&<button onClick ={this.saveBook}>Save</button>}
            </div>
            <div className = 'col-3'>
                <img src = {image} /> 
            </div>
            <div className = "col-9">
                <p>{description}</p>
            </div>
        </article>)
    }
}

export default BookEntry;