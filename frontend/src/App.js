import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import Home from './routes/Home';
import random_material_colors from 'random-material-color';
import Join_Team from "./routes/Join_Team";
import Quiz from "./routes/Quiz";
import Quiz_Questions from "./routes/Quiz_Questions";

export const ROUTES = {
    home: {
        component: Home,
        exact: true,
        path: '/',
    },
    join: {
        component: Join_Team,
        exact: true,
        path: '/join/:teamcode'
    },
    quiz: {
        component: Quiz,
        exact: true,
        path: '/quiz/:quizcode'
    },
    quiz_questions: {
        component: Quiz_Questions,
        exact: true,
        path: '/quiz/:quizcode/questions'
    }
};

const Parent = styled.div`
    padding: 2em;
    transition: background-color 2000ms;
    background-color: ${({currentColor}) => currentColor};
    height: 100vh;
    width: 100vw;
`;

const RouteComponent = connect(
    state => ({
        user: state.user,
    }),
)(props => {
    if (props.isPrivate === true && props.user.isLoggedIn === false) {
        return <Redirect to={ROUTES.home.path}/>;
    }
    return <Route {...props}/>;
});


class App extends React.Component {
    bg = '#eeefe9';
    state = {
        bgColor: this.bg
    };

    componentDidMount() {
        const interval = setInterval(() => {
            if (window.location.pathname === ROUTES.home.path) {
                this.setState({
                    bgColor: random_material_colors.getColor()
                });
            } else {
                this.setState({
                    bgColor: this.bg
                })
            }
        }, 5000);
        if (window.location.pathname !== ROUTES.home.path) {
            clearInterval(interval)
        }
    }

    render() {
        return (
            <Parent currentColor={this.state.bgColor}>
                <Switch>
                    {Object.keys(ROUTES).map((routeKey, index) => <RouteComponent key={index} {...ROUTES[routeKey]}/>)}
                </Switch>
            </Parent>
        );
    }
}

export default App;
