import React from "react";

const SearchBar = ({ onChange, placeholder, className, value, onKeyDown, autoFocus }) => {
    return (
        <input
            autoFocus={autoFocus}
            className="w-full 2xl:text-lg dark:text-white outline-none text-gray-900 dark:bg-gray-800 rounded px-4 py-3"
            type="search"
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={value}
        />
    );
};

export default SearchBar;
