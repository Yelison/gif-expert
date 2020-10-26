import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState("")

    const handleAdd = ({target}) => {
        setinputValue(target.value)
    }

    const handleSubmit = (e) => { 
        e.preventDefault();

        setCategories(cats => [...cats, inputValue]);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleAdd }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory;
