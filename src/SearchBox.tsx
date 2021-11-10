import React from "react";
import "./SearchBox.css";

function SearchLogo() {
    return (
        <div className="container">
            <div className="search-icon">
                <div className="search-icon-circle">
                </div>
                <div className="stick">
                    <div className="stick-circle">
                        <div className="decoration2"></div>
                        <div className="decoration"></div>
                    </div>
                    <div className="trapeze"></div>
                    <div className="stick-little-circle"></div>
                </div>
            </div>
            <div className="inputsearch">
                <input type="search" name="inputSearch"
                    id="inputSearch"
                    placeholder="Search Facebook"
                    onFocus={(e) => e.target.placeholder = ""}
                    onBlur={(e) => e.target.placeholder = "Search Facebook"}
                />
            </div>
        </div>
    )

}


export default SearchLogo