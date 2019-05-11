import React, { Component } from "react";
import {Jumbotron} from "../components/Jumbotron";
import API from "../utils/API";
import {SavedForm} from "../components/SavedForm";
import { List } from "../components/List";

import "../App.css";

class Search extends Component {
    state = {
        savedBooks: [],
    }

    componentDidMount(){
        this.getBooks();
    }
    // gets saved books from Database
    getBooks = () => {
        API.getBooks()
            .then(res => {
                this.setState({ savedBooks: res.data })
            })
            .catch(err => console.log(err));
    };

    // deletes books based on customer selection
    deleteBooks = id => {
        API.deleteBook(id)
            .then(res => this.getBooks())
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div>
                <Jumbotron>
                    <div className="text-center jbTextDiv">
                        <h1 className="text-white jbHeading"> LIST SAVED AND DELETE </h1>                       
                    </div>
                </Jumbotron>
                <div className="container mb-5">
                    <h3 className="mt-5 mb-3"> Saved Books... </h3>
                    <div>
                        <List>
                            {this.state.savedBooks.length ? (<SavedForm key={this.state.savedBooks._id} savedBooks={this.state.savedBooks} deleteBooks={this.deleteBooks}/>) : (<h3 className="mt-5 text-secondary"> No books saved in the database </h3>)}
                        </List>
                    </div>
                
                </div>
           </div>
        )
    }

}

export default Search;