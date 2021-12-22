import "./css/Header.css";
import SearchBox from "./SearchBox";
import {ReactComponent as FacebookLogo} from "./assets/facebook-f.svg";
import leftIconsScreenshot from "./assets/Screenshot1.jpg"

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <div className="facebook-logo"
                onClick={()=>{window.location.reload()}}
                >
                    <FacebookLogo id="logo"/>
                </div>
                <div className="search-box-container">
                    <SearchBox/>
                </div>
            </div>

            <div className="header__right">
                <img src={leftIconsScreenshot} alt="" />
            </div>
        </div>

    )

}

export default Header