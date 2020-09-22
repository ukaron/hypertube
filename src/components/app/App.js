import React from 'react';
import { connect } from 'react-redux';
import Header from "./header/Header";
import Content from "../content/Content";
import { getFilms } from "../../selectors/films"
import { Main } from "./app-styled";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Main>
                    <Content/>
                    <Content/>
                    <Content/>
                </Main>
            </div>
        )
    }

    async componentDidMount() {
        this.props.getFilms();
    }
}

const mapStateToProps = (state) => ({
    trendingFilms: state.films
});

export default connect(mapStateToProps, {getFilms})(App);
