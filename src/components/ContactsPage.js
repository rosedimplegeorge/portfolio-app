import React, { Component } from 'react';
import NavBar from './NavBar'
import Footer from './Footer';
import { Image } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import styled from 'styled-components'
//import { Link } from 'react-router-dom';

const ContactsStyle = styled.div`
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

class ContactsPage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <ContactsStyle >
                   <ul>
                       <li>Email:rosedimplegeorge@gmail.com</li>
                       <li>www.rosedimplegeorge.com</li>
                       <li>Ph:404-936-8587</li>
                   </ul>
           <Grid>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src="https://i.imgur.com/9p94NZZ.jpg" alt="RDG" thumbnail />
                        </Col>
                    </Row>
                </Grid>
                </ContactsStyle>
                <Footer />
            </div>
        );
    }
}

export default ContactsPage;