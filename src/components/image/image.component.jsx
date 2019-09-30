import React from 'react';

import './image.styles.scss';

const Image = ( {imageUrl, imageAlt} ) => {
    return(
        <div className="image-container" >
            <img src={imageUrl} alt={imageAlt}  />
        </div>
    );
};

export default Image;