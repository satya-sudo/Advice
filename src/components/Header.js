import React from 'react';
import SearchBar from './SearchBar';
const Header = () => {
    return (
        <div className="ui inverted segment">
            <h2 className="ui center aligned icon header">
            <i className="pencil alternate icon" />
                Advise
            </h2>
            <SearchBar />
        </div>
    );
};

export default Header;


