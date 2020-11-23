import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGird from './components/GifGird';

const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    return (
        <>
           <h2>GifExpertApp</h2>
           <hr/>

            <AddCategory setCategories={ setCategories }/>
               {categories.map((category => 
                <GifGird 
                    key={ category }
                    category={ category }
                    />))}
        </>
    )
}

export default GifExpertApp;
