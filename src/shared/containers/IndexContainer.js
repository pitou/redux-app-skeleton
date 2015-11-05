import { createContainer } from 'redux-easy-app';

import IndexComponent from '../components/IndexComponent';
import * as SomeActions from '../actions/someActions';

function mapStateToProps(state) {
    const {
        appTitle
    } = state.someProps;

    return {
        appTitle
    };
}

export default createContainer(IndexComponent, SomeActions, mapStateToProps);
