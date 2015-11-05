import { createContainer } from 'redux-easy-app';

import RandomTextComponent from '../components/RandomTextComponent';
import * as SomeActions from '../actions/someActions';

function mapStateToProps(state) {
    const {
        randomText
    } = state.someProps;

    return {
        randomText
    };
}

export default createContainer(RandomTextComponent, SomeActions, mapStateToProps);
