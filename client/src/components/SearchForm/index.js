import React from "react";
import "./style.css";
import Popup from "reactjs-popup";

export function SearchForm(props) {
  return (
    <div>
    <h3 className="mt-2 mb-4 searchResultsHeader">{props.header}</h3>
        {props.results.map(result => (
            <li className="list-group-item mb-3 pt-4 rounded" key={result.id}>
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        {!result.volumeInfo.imageLinks ? (<div><h3 className="p-4">No Image Available</h3><img src="#" className="card-img mx-auto pt-4 pb-2 d-block" alt="..."/></div>) : (<img src={result.volumeInfo.imageLinks.smallThumbnail} className="card-img mx-auto pt-4 pb-2 d-block" alt="..."/>)}
                            
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <a href={result.volumeInfo.previewLink} className="card-link"><h5 className="card-title">{result.volumeInfo.title}</h5></a>
                                    <p className="card-text">by: {result.volumeInfo.authors}</p>
                                    <p className="card-text">{result.volumeInfo.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters text-center">
                        <div className="col-12">
                            {/* here we check to see if the results has an image because it throws an error if it doesnt, and then the user is notified that they saved the book with the popup component */}
                            {!result.volumeInfo.imageLinks ? (<div className="card-footer text-muted">
                                <Popup trigger={<button className="btn btn-secondary">
                                    <i className="far fa-save"></i> SAVE BOOK
                                </button>} onOpen={() => props.addBook(result.id,result.volumeInfo.title,  result.volumeInfo.authors, result.volumeInfo.description,  "no image", result.volumeInfo.previewLink) } position="top right">
                                <div>{`SAVED:`}</div>
                                    <div className="font-weight-bold">{result.volumeInfo.title}</div>
                                </Popup>
                            </div>) : (<div className="card-footer text-muted">
                                <Popup trigger={<button className="btn btn-success">
                                    <i className="far fa-save"></i> SAVE BOOK
                                </button> } onOpen={() => props.addBook(result.id,result.volumeInfo.title,  result.volumeInfo.authors, result.volumeInfo.description,  result.volumeInfo.imageLinks.smallThumbnail, result.volumeInfo.previewLink)} position="top right">
                                    <div>{`SAVED:`}</div>
                                    <div className="font-weight-bold">{result.volumeInfo.title}</div>
                                </Popup>
                            </div>)}
                        </div>
                    </div>
                </div>
            </li>
        ))}
    </div>
  );
}
