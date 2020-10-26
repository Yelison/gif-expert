import React from 'react'

const GifGird = ({ category }) => {

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=My+hero+academy&limit=10&api_key=4ROcDwziMCHNgP4m8Q4VdaL7xC9I4f2Y';

        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
    }

    getGifs();
    return (
        <div>
            <h3> { category } </h3>
        </div>
    )
}

export default GifGird
