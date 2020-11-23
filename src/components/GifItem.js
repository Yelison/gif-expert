import React from 'react'

const GifItem = ({id, title, url}) => {
    return (
        <div className="card">
            <img src={ url } alt={title}/>
            <p key={ id }>{title}</p>
        </div>
    )
}

export default GifItem;
