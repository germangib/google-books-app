import React from "react";
import "./style.css";
function Nav() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
        <i className="fas fa-house-damage"></i> Google Books Search
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse m-0" id="navbarSupportedContent">
            <div className="navbar-nav ml-auto">
              <a className="nav-link" href="/search">
              Find Books
              </a>
              <a className="nav-link" href="/saved">
              Saved Books
              </a>
            </div>
        </div>
      </div>
    </nav>
    
  );
}

export default Nav;