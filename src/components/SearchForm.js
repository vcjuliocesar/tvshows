import React, { useState } from 'react';

const SearchForm = ({setBusqueda}) => {

    const [showname, setShowname] = useState({
        name: ''
    });

    const [error, setError] = useState(false);

    const { name } = showname;

    const onChangeInput = (e) => {
        setShowname({
            ...showname,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (name.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        setBusqueda(name);
    }

    setTimeout(()=>{
        setError(false);
    },3000);

    return (

        <form
            className="search-form"
            onSubmit={onSubmitForm}
        >
            <input
                type="text"
                name='name'
                value={name}
                onChange={onChangeInput}
            />
            <input type="submit" className="btn" value="Buscar" />
            {error ? <p className="alet-error">Ingresa un término de búsqueda</p> : null}
        </form>
    );
}

export default SearchForm;