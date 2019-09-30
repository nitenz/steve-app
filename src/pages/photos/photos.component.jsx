import React from 'react';

import Image from '../../components/image/image.component';

import './photos.styles.scss';

class Photos extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            photos: [
                {url: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',alt:'tst1'},
                {url:'https://i.ibb.co/ypkgK0X/blue-beanie.png',alt:'tst2'},
                {url:'https://i.ibb.co/QdJwgmp/brown-cowboy.png',alt:'tst3'},
                {url:'https://i.ibb.co/RjBLWxB/grey-brim.png',alt:'tst4'},
                {url:'https://i.ibb.co/YTjW3vF/green-beanie.png',alt:'tst5'},
                {url:'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',alt:'tst6'},
                {url:'https://i.ibb.co/bLB646Z/red-beanie.png',alt:'tst7'},
                {url:'https://i.ibb.co/1f2nWMM/wolf-cap.png',alt:'tst8'},
                {url:'https://i.ibb.co/X2VJP2W/blue-snapback.png',alt:'tst9'}
            ]
        }
    }
   
    render(){
        return(
            <div className="photos-container">
                { this.state.photos.map(
                        ( item ) => (
                            <Image imageUrl={ item.url} imageAlt={ item.alt } ></Image>
                        )
                 )}
            </div>
        )
    }

};

export default Photos;