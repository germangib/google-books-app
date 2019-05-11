import React, { Component } from "react";
import { Jumbotron } from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { faBook, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../App.css";

class LandingPage extends Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <div className="text-center jbTextDiv">
                        <h1 className="text-white jbHeading">SEARCH / SAVE / READ</h1>
                        <Link to={"/search"}>
                            <button className="btn m-3 jbBtn"><FontAwesomeIcon icon={faBook} /> Google Books Search</button>
                        </Link>
                        <Link to={"/saved"}>
                            <button className="btn m-3 jbBtn"><FontAwesomeIcon icon={faSave} /> Saved Books</button>
                        </Link>
                    </div>
                </Jumbotron>
           </div>
        )
    }

}

export default LandingPage;