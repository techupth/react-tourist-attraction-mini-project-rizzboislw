import React from 'react';
import { DebounceInput } from 'react-debounce-input';

function Header({ getInputResult, collectInput }){
    return (
        <header className="main-page-header">
            <h1 className="header-main-topic">เที่ยวไหนดี</h1>
            <div className="search-section">
                <label htmlFor="searchbar" className="main-searchbar"> 
                    <h4 className='searchbar-title'>ค้นหาที่เที่ยว</h4>
                    <DebounceInput
                        id="searchbar"
                        type="text"
                        minLength={3}
                        debounceTimeout={500}
                        placeholder='หาที่เที่ยวแล้วไปกัน...'
                        onChange={getInputResult}
                        value={collectInput}
                    />
                </label>
            </div>
        </header>
    );
};

export default Header;