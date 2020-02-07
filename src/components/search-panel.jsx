import React from 'react';

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    }
    return (
        <input type="text" style={searchStyle} placeholder={searchText} className='searchInput'
            //disabled equal disabled={true}
            htmlFor='todo' />
    )
};

export default SearchPanel;