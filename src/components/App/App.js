import React, { useEffect } from 'react';
import Content from "../Content/Content";
import { getFilms, getGenre } from "../../actions/films"
import { Main } from "./app-styled";
import SignInSide from "./test";
import {connect, useDispatch} from "react-redux";
import { userSelector } from "../../selectors/user";
import Header from "../Header/Header";


const App = ({user}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFilms());
        dispatch(getGenre());
    }, []);

    return (
            <div className="App">
                {!user.auth && <SignInSide/>}
                <Main>
                    <Header />
                    <Content/>
                </Main>
            </div>
        )
}
const mapStateToProps = (state) => ({
    user: userSelector(state)
});
export default connect(mapStateToProps)(App);
