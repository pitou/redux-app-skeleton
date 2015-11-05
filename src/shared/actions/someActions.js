import fetch from 'isomorphic-fetch';

export function changeTitle(newTitle) {
    return {
        type: 'CHANGE_TITLE',
        newTitle
    };
}

export function notifyAsyncRequest() {
    return {
        type: 'NOTIFY_ASYNC_REQUEST'
    };
}

export function receiveRandomText(text) {
    return {
        type: 'RECEIVE_RANDOM_TEXT',
        text
    };
}

export function resetRandomText() {
    return {
        type: 'RESET_RANDOM_TEXT'
    }
}

export function fetchRandomText() {

    return function(dispatch) {

        dispatch(notifyAsyncRequest());

        return fetch(`http://www.randomtext.me/api/lorem/ul-5/5-15`)
            .then(response => response.json())
            .then(json => {
                console.log("Async action --> Json fetched");
                console.log(json);

                dispatch(receiveRandomText(json.text_out))
            });
    };
}
