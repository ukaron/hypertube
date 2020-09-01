import React from "react";
import {Wrapper} from "./header-styled";

const Header = () => {
    return(
        <Wrapper>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
        </nav>
        </Wrapper>
    )
}

export default Header;