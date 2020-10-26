import React, { useState } from 'react'

const GifExpertApp = () => {
    const [categories, setCategories] = useState(["My hero academy", "Kimetsu no yaiba", "shingeki no kiogin"]);

    const handleAdd = () => {
        setCategories([...categories, "New hero"]);

    }

    return (
        <>
           <h2>GifExpertApp</h2>
           <hr/>
            <button onClick={ handleAdd }> Agregar nuevo heroe</button>
           <ol>
               {categories.map((category => {
                   return <li key={ category }> { category } </li>
               }))}
           </ol>
        </>
    )
}

export default GifExpertApp;
