import React, { Component } from "react";
import {Jumbotron} from "../components/Jumbotron";
// import { Link } from "react-router-dom";
import "../App.css";

class Search extends Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <div className="text-center jbTextDiv">
                        <h1 className="text-white jbHeading"> JUST SAVE </h1>                       
                    </div>
                </Jumbotron>
           </div>
        )
    }

}

export default Search;