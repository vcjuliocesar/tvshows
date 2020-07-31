import React from 'react';

const Show = ({ show }) => {
    const image = show.image ? show.image.medium : '';
    const strippedString = show.summary.replace(/(<([^>]+)>)/gi, "");
    return (
        <article className="tv-show">
            <div className="left img-container">
                <img src={image} alt={show.name} />
            </div>
            <div className="right info">
                <h1>{show.name}</h1>
                <p>{strippedString}</p>
            </div>
    </article>
      
    );
}

export default Show;