import React, { Component } from 'react';
import PropTypes from 'prop-types';

const newTitleRef = React.createRef();

class IndexComponent extends Component {

    changeTitle() {
        this.props.changeTitle(newTitleRef.current.value);
    }

    render() {
        return (
            <div>
                <div className="title">
                    <h1>Welcome to {this.props.appTitle}</h1>
                </div>
                <div className="welcome">
                    <input type="text" ref={newTitleRef} defaultValue={this.props.appTitle} />

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
