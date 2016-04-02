import React, { PropTypes } from 'react';  // eslint-disable-line no-unused-vars
import { Link } from 'react-router';

class LayoutComponent extends React.Component {

    render() {
        return (
            <div>
                <div className="links">
                    <div>
                        <Link to='/'>Home page</Link>
                    </div>
                    <div>
                        <Link to='/randomText'>Show random text</Link>
                    </div>
                    <div>
                        <Link to='/about'>About</Link>
                    </div>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

LayoutComponent.propTypes = {
    children: PropTypes.object.isRequired,
};

export default LayoutComponent;
