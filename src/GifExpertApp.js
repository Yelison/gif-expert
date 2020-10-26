import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGird from './components/GifGird';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(["My hero academy"]);

    return (
        <>
           <h2>GifExpertApp</h2>
           <hr/>

            <AddCategory setCategories={ setCategories }/>
           <ol>
               {categories.map((category => 
                <GifGird 
                    key={ category }
                    category={ category }
                    />))}
           </ol>
        </>
    )
}

export default GifExpertApp;
