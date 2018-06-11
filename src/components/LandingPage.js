import React, { Component } from 'react';
import './StyledComponents/LandingPageStyle'
import NavBar from './NavBar'
import Footer from './Footer'
import { Image } from 'react-bootstrap';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Image src="https://i.imgur.com/kiP8W2p.jpg" alt="RDG" responsive />
                <Footer />
            </div>
        );
    }
}

export default LandingPage;

