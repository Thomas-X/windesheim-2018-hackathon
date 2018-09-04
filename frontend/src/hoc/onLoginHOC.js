import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { deepDiff } from '../services/Helpers';
import { ReduxState } from '../redux/index';

export default (func) => (WrappedComponent) => {
    class OnLoginHOC extends React.Component {

        componentDidUpdate(prevProps) {
            if (deepDiff(this.props.user, prevProps.user)) {
                if (this.props.user.isLoggedIn === true) {
                    func(this.props);
                }
            }
        }

        render() {
            return (
                <WrappedComponent {...this.props}/>
            );
        }
    }

    return compose(
        connect((state) => ({
            user: state.user,
        })),
    )(OnLoginHOC);
};