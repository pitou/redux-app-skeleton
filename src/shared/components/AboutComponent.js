import React from 'react';  // eslint-disable-line no-unused-vars

const { Component } = React;

class AboutComponent extends Component {

    render() {
        return (
            <div className="smallText">
                <div>
                    Thanks for trying this small app :)
                </div>
                <div>
                    Now you&apos;re ready to build your own, have fun with React + Redux!
                </div>
            </div>
        );
    }
}

export default AboutComponent;
