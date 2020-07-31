import React from 'react';
import Show from './Show';
const TvShows = ({shows}) => {
    
    return (
        <div className="tv-shows">
            {/*<div class="loader">Loading...</div>*/}
           {shows.map(show=>(
                <Show
                    key={show.id}
                    show={show}
                />
            ))
           }
        </div>
    );
}

export default TvShows;