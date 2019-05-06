import React, {Component,useEffect} from "react";
import {withRouter} from 'react-router'
import API from "../utils/API";

class BookEntry extends Component {
    state = {
        saved: false,
        savePage: false
    }

    componentDidMount = () => {
        if(this.props.savePage) {
            this.setState({
                saved: true,
                savePage: true
            })
        } 
    }
    // brings back save button for new search
    componentWillReceiveProps = () => {
        if (!this.props.savePage) {
            this.setState({
                saved:false,
                savePage:false
            })
        }
    }
    component

    listAuthors = authors => {
        let newAuthors = authors[0]
        for (let i =1; i < authors.length; i++) {
            newAuthors += ", " + authors[i];
        }
        return newAuthors;
    }

    saveBook = () => {
        API.saveBook(this.props).then(response => {
            this.setState({saved:true});
        }).catch(error => {
            console.log(error);
        })
    }

    deleteBook = () => {
        API.deleteBook(this.props.id).then(response => {
            this.setState({
                saved:false
            });
        }).catch(error => {
            console.log(error);
        })
    }

    render (props) {
        const {title,authors,description,image,link} = this.props;
        //  if it's not saved but we're on the save page, don't render it
        if (this.state.savePage && !this.state.saved) {
            return false;
        } else
        return (<article className = "book-entry row">
            <div className = "col-9">
                <h3>{title}</h3>
                <h5>{this.listAuthors(authors)}</h5>
            </div>
            <div className = "col-3">
                <button onClick={()=>window.location.href=link}>View</button>
                {!this.state.saved &&<button onClick ={this.saveBook}>Save</button>}
                {this.state.savePage && <button onClick={this.deleteBook}>Delete</button>}
            </div>
            <div className = 'col-3'>
                <img src = {image} alt ={title + " cover"}/> 
            </div>
            <div className = "col-9">
                <p>{description}</p>
            </div>
        </article>)
    }
}

export default withRouter(BookEntry);