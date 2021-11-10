import React from "react";
import "./Header.css";
import SearchBox from "./SearchBox";
import {ReactComponent as FacebookLogo} from "./css assets/facebook-f.svg";


{<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> }

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <div className="facebook-logo">
                    <FacebookLogo id="logo"/>
                </div>
                <div className="search-box-container">
                    <SearchBox/>
                </div>
            </div>
            <div className="header__middle">
                <h1>middle</h1>
            </div>

            <div className="header__right">
                <h1>right</h1>
            </div>
        </div>

    )

}




export default Header