import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './StyledComponents/LandingPageStyle'
import NavBar from './NavBar'
import LandingPageStyle from './StyledComponents/LandingPageStyle';
import ImageStyle from './StyledComponents/ImageStyle'
class LandingPage extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <LandingPageStyle />
                <ImageStyle>
                <Image src="https://i.imgur.com/7WdZ4Vv.jpg" responsive />
                </ImageStyle>
            </div>
        );
    }
}

export default LandingPage;

