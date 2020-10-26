import React, { useState } from 'react'
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(["My hero academy", "Kimetsu no yaiba", "shingeki no kiogin"]);

    return (
        <>
           <h2>GifExpertApp</h2>
           <hr/>

            <AddCategory setCategories={ setCategories }/>
           <ol>
               {categories.map((category => {
                   return <li key={ category }> { category } </li>
               }))}
           </ol>
        </>
    )
}

export default GifExpertApp;
