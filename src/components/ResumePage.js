import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Image } from 'react-bootstrap';
import styled from 'styled-components'

const ResumeStyle = styled.div`
display: flex;
justify-content: center;
`
class ResumePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <ResumeStyle>
                <Image src="https://i.imgur.com/Y8qviWE.png" alt="RESUME" responsive />
                </ResumeStyle>
                <Footer />
            </div>
        );
    }
}

export default ResumePage;