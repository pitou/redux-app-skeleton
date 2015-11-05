import React from 'react';  // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

const { Component, PropTypes } = React;

class IndexComponent extends Component {

    changeTitle() {
        this.props.changeTitle(ReactDOM.findDOMNode(this.refs.newTitle).value);
    }

    render() {
        return (
            <div>
                <div className="title">
                    <h1>Welcome to {this.props.appTitle}</h1>
                </div>
                <div className="welcome">
                    <input type="text" ref="newTitle" defaultValue={this.props.appTitle} />

                    <button onClick={this.changeTitle.bind(this)}>Change title</button>
                </div>
            </div>
        );
    }
}

IndexComponent.propTypes = {
    appTitle: PropTypes.string.isRequired,
    changeTitle: PropTypes.func.isRequired
};

export default IndexComponent;
