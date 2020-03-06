import React from 'react';
import FilmRow from './FilmRow';

function FilmListing(props) {
    let filmList = props.films.map(film => {
        return (
            <div className="film-row">
                <h1><FilmRow film={film} /></h1>
            </div>
        )
    })

    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <hi>{filmList}</hi>
        </div>
    );
}

export default FilmListing;