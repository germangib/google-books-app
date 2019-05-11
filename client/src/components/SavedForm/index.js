import React from "react";

export function SavedForm(props) {
  return (
        <div>
            {props.savedBooks.map(books => (
                <li className="list-group-item mb-3 rounded" key={books._id}>
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={books.image} className="card-img mx-auto pt-4 pb-2 d-block" alt={books.title} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <a href={books.link} className="card-link"><h5 className="card-title">{books.title}</h5></a>
                                        <p className="card-text">by: {books.authors}</p>
                                        <p className="card-text">{books.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row no-gutters text-center">
                            <div className="col-12">
                                <div className="card-footer text-muted">
                                    <button onClick={() => props.deleteBooks(books._id)} className="btn btn-primary">
                                    <i className="fas fa-trash-alt"></i> DELETE BOOK
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </div>
    );
}