import React from 'react';
import PropTypes from 'prop-types';

class NameDisplay extends React.Component{
    render(){
        return <p>{this.props.text}</p>;
    }
}

NameDisplay.propTypes = {
    text: PropTypes.string
};
NameDisplay.defaultProps = {
    text: null
};

export default NameDisplay;