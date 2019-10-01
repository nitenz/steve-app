import React from 'react';

import './image.styles.scss';

class Image extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isImageFullScreen: false
        } 
    }

    handleClick = (evt ) =>{
        this.setState({isImageFullScreen: !this.state.isImageFullScreen});
        console.log( 'isImageFullScreen: ', this.state.isImageFullScreen );
    }

    render(){
        const { imageUrl, imageAlt } = this.props;

        return(
            <div className="image-container">
                <img  className={`${this.state.isImageFullScreen ? 'fullscreen-image' : '' }`}  src={imageUrl} alt={imageAlt} onClick={ this.handleClick.bind( this ) }  />
            </div> 
        );
    }

}

export default Image;