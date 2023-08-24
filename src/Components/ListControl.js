import React from 'react'

    const SearchInput = ({value, onChange, onSearch})=>{
        return(
            <div className="input-group rounded">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={value} onChange={onChange}/>
                <button className="btn btn-primary" onClick={onSearch}>Search</button>
            </div>
        );
    }

export default SearchInput;
