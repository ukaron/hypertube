import React from 'react';
import { connect } from 'react-redux';
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar"
import Content from "../content/Content";
import {getUsers} from "../../reducers/films"
import {Main} from "./app-styled";


class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
                <Header/>
                <Main>
                <Sidebar/>
                <Content isLoading={this.props.trendingFilms.loading} trendingFilms={this.props.trendingFilms.films} />
                </Main>
            </div>
        )
    }
    async componentDidMount() {
        this.props.getUsers(this.state);
    }
}
const mapStateToProps = (state) => ({
    trendingFilms: state.films
})

export default connect(mapStateToProps, {getUsers: getUsers})(App);
