import initialState from '../state';

export default function(state = initialState, action = {}) {

    switch (action.type) {

        case 'CHANGE_TITLE':

            console.log(`Reducer --> Changing title to: ${action.newTitle}`);

            return Object.assign({}, state, {
                appTitle: action.newTitle
            });

        case 'RECEIVE_RANDOM_TEXT':

            console.log(`Reducer --> Received new random text: ${action.text}`);

            // Strip html tags
            const text = action.text.replace(/(<([^>]+)>)/ig, ' ');

            return Object.assign({}, state, {
                randomText: text
            });

        case 'RESET_RANDOM_TEXT':

            console.log(`Reducer --> Resetting random text`);

            return Object.assign({}, state, {
                randomText: ''
            });

        default:
            return state;
            break;
    }
}
