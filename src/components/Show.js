import React from 'react';

const Show = ({ show }) => {
    const image = show.image ? show.image.medium : '';
    const strippedString = (show.summary) ? show.summary.replace(/(<([^>]+)>)/gi, "") : null;
    return (
        <article className="tv-show">
            <div className="left img-container">
                <img src={image} alt={show.name} />
            </div>
            <div className="right info">
                <h1>{show.name}</h1>
                <p>{strippedString}</p>
                <p>Language: {show.language}</p>
                <p>Status: {show.status}</p>
                <h3>Genres</h3>
                <ul>
                    {show.genres.map(genre=>(
                        <li>{genre}</li>
                    ))}
                </ul>
            </div>
        </article>

    );
}

export default Show;