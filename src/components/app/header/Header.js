import React from "react";
import { Wrapper } from "./header-styled";
import SearchForm from "../../searchForm/SearchForm";

const Header = () => {
    return(
        <Wrapper>
            <SearchForm/>
        </Wrapper>
    )
}

export default Header;