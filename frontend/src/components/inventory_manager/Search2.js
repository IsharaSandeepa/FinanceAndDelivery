import React, { useState } from 'react'

const Search2 = ({history}) => {

    const [keyword, setKeyword] = useState('');

    const searchHandler = (e) => {
        e.preventDefault()

        if(keyword.trim()) {
            history.push(`/all_suppliers/${keyword}`)
        } else {
            history.push('/')
        }
    }


    return (
        <form onSubmit={searchHandler} className="search_Thiran">
            <div>
                <input
                    type="text"
                    id="inventory_search_field"
                    placeholder="Enter supplier name"
                    onChange={(e) => setKeyword(e.target.value)}
                    className="searchBox_Thiran"
                />
                
            </div>
        </form>
    )
}

export default Search2;
