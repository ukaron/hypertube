import React from "react";

const GenreMovie = ({genre}) => {
    return (
        <div>
            {
                genre.map(item => (
                    <h1 key={item.id}>{item.name}</h1>
                ))
            }
        </div>
    )
}

export default GenreMovie;