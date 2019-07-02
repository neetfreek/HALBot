import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component{

    render(){
        return <div>
            <img src= {this.props.link} alt={"background"}/>
            </div>
    }
}

Image.propTypes = {
    link: PropTypes.string
};

export default Image;