import React, { Component } from "react";
import {Jumbotron} from "../components/Jumbotron";
import { SearchForm } from "../components/SearchForm";
import { List } from "../components/List";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../App.css";
import API from "../utils/API"; 

class Search extends Component {

    state = {
        searchInput: "",
        searchResults: [],
        header: ""
    }

    // Function to capture characters in the text box
    // it will get the informatino into name
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //searches google api using the form info
    // results from res.data.items are assigned to searchResults (from state)
    searchBook = (book) => {
        API.searchBook(book)
        .then(res => { 
            this.setState({searchResults:  res.data.items})
            // console.log(res.data.items);
        })
      .catch(err => console.log(err)); 
    }

    // submits the search request to searchBook function 
    handleFormSubmit = event => {
        event.preventDefault();
        
        if (this.state.searchInput) {
            this.searchBook(this.state.searchInput);
        } else {
            console.log('error')
        }
        this.setState({
            header: "Results",
        })  
    };

    // calls saveBook API
    addBook = (id, title, author, description, image, link) => {
        const newBook = {
            apiId: id,
            title: title,
            authors: author,
            description: description, 
            image: image,
            link: link
        }
        //this saves the book info to the mongoose database
        
        API.saveBook(newBook)
        .then(res => {  
        })
      . catch(err => console.log(err)); 
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <div className="container"> 
                        <h3 className="mt-12 searchHeader text-dark"> Google Books Search </h3>
                        <form>
                            <input 
                                value = {this.state.searchInput} 
                                onChange={this.handleInputChange} 
                                name="searchInput" 
                                placeholder="" />

                                <div>
                                    <button className="btn formBtn mt-5 text-blue"
                                        disabled={(this.state.SearchInput)}
                                        onClick={this.handleFormSubmit}
                                    >
                                    <FontAwesomeIcon icon={faSearch} style={{ color: 'blue' }} />  Search 
                                    </button>
                                </div>
                        </form>
                        <div className="text-center jbTextDiv">
                            <h1 className="text-white jbHeading"> SEARCH AND SAVE  </h1>                       
                        </div>
                    </div>
                </Jumbotron>
                <div className="container mb-5">
                    <List>
                        {this.state.searchResults ? ( < SearchForm key={this.state.searchResults.id} results={this.state.searchResults} header={this.state.header} addBook={this.addBook} />) : ( <h3 className="mt-5">Sorry, your search did not match any documents.</h3>)}
                    </List>  
                </div>
           </div>
        )
    }

}

export default Search;