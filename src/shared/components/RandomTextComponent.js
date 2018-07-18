import React from 'react';
import PropTypes from 'prop-types';

const { Component } = React;

class RandomTextComponent extends Component {

    componentDidMount() {
        console.log("RandomTextComponent --> Component did mount");
        if (typeof this.props.randomText === 'undefined' || this.props.randomText.trim() === '') {
            this.fetchRandomText();
        }
    }

    componentWillUnmount() {
        console.log("RandomTextComponent --> Component will unmount");
        this.props.resetRandomText();
    }

    fetchRandomText() {
        console.log("RandomTextComponent --> Fetching some random text");
        this.props.fetchRandomText();
    }

    render() {
        return (
            <div>
                <div className="text">
                    {this.props.randomText}
                </div>
                <div className="smallText">
                    To fetch more random text:
                    <button onClick={this.fetchRandomText.bind(this)}>Hit this button</button> or refresh the page.
                </div>
            </div>
        );
    }
}

RandomTextComponent.propTypes = {
    randomText: PropTypes.string.isRequired,
    fetchRandomText: PropTypes.func.isRequired,
    resetRandomText: PropTypes.func.isRequired
};

export default RandomTextComponent;
