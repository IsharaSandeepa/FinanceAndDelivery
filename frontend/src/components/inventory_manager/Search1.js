import React, { useState } from 'react'

const Search1 = ({history}) => {

    const [keyword, setKeyword] = useState('');

    const searchHandler = (e) => {
        e.preventDefault()

        if(keyword.trim()) {
            history.push(`/all_supplied_items/${keyword}`)
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
                    placeholder="Search by item name"
                    onChange={(e) => setKeyword(e.target.value)}
                    className="searchBox_Thiran"
                />
            {/* </div> */}
            
            </div>
        </form>
    )
}

export default Search1;
