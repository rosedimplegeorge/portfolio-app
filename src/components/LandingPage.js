import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './StyledComponents/LandingPageStyle'
import NavBar from './NavBar'
import LandingPageStyle from './StyledComponents/LandingPageStyle';
import ImageStyle from './StyledComponents/ImageStyle'
import Footer from './Footer'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <LandingPageStyle />
                <ImageStyle>
                <Image src="https://i.imgur.com/9p94NZZ.jpg" responsive />
                </ImageStyle>
                <Footer />
            </div>
        );
    }
}

export default LandingPage;

