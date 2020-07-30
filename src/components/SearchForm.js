import React,{useState} from 'react';

const SearchForm = () => {
    
    const[showname,setShowname]=useState({
        name:''
    });

    const[error,setError] = useState(false);
    const {name}=showname;

    const onChangeInput = (e)=>{
        setShowname({
            ...showname,
            [e.target.name]:e.target.value
        });
    }

    const onSubmitForm = (e) =>{
        e.preventDefault();

        if(name.trim() === ''){
            setError(true);
            return;
        }

        setError(false);
    }
    
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
            <input type="submit" value="Buscar" />
        </form>
    );
}

export default SearchForm;