import React, { Component } from 'react';
import styled from 'styled-components'
import { Image } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import NavBar from './NavBar';
import Footer from './Footer';

const AboutStyle = styled.div`
width: 100vw;
height: 60vh;
border: solid black 1px;
text-align: justify;
display: flex;
align-items: center;
/* p, h5{
    width: 55vw;
    display: flex;
    align-content: left;
    margin-left: 60px;
    @media (max-width: 600px){
        font-size: 12px;
        width: 90vw;
        margin-left: 10px;
    }
    } */
}`

class AboutPage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <AboutStyle >
                <p>Hi ! I am Rose Dimple George.I am a full stack developer with a passion for development. I have an entry level of knowledge in front end development using my preferred front end framework, React, in addition to a proficiency using Express, MongoDB, Ruby on Rails, and PostgreSQL as my Controllers and Models. My code is consistent, clean, easy to read. I work well with others, learn fast, and have exceptional communication skills when helping a teammate through a difficult problem.Check out my  GitHub and give me your feedback.</p>
                <Grid>
                    <Row>
                        <Col xs={10} md={10}>
                            <Image src="https://i.imgur.com/9p94NZZ.jpg" alt="RDG" thumbnail />
                        </Col>
                    </Row>
                </Grid>
                </AboutStyle>
                <Footer />
            </div>
        );
    }
}

export default AboutPage;