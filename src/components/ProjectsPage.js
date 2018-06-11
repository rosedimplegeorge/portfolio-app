import React, { Component } from 'react';
import NavBar from './NavBar'
import { Button } from 'react-bootstrap'
import Footer from './Footer'
import { Image } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import styled from 'styled-components'

const ProjectsStyle = styled.div`
width: 100vw;
height: 60vh;
border: solid black 1px;
text-align: justify;
display: flex;
align-items: center;
p, h5{
    width: 55vw;
    display: flex;
    align-content: left;
    margin-left: 60px;
    @media (max-width: 600px){
        font-size: 12px;
        width: 90vw;
        margin-left: 10px;
    }
    }
`

class ProjectsPage extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
    render() {
        return (
            <div>
                <NavBar />
                <ProjectsStyle >
                <Grid>
                    <Row>
                        <Col xs={2} md={2}>
                            <Image src="https://i.imgur.com/MB2g8XN.png" alt="RDG" thumbnail />
                            <Button bsStyle="primary" bsSize="large" href="http://clever-swartz-16d5a5.bitballoon.com/">Jeopardy</Button>
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row>
                        <Col xs={2} md={2}>
                            <Image src="https://i.imgur.com/zTDma7h.png" alt="TechnicalSkiilsTracker" thumbnail />
                            <Button bsStyle="primary" bsSize="large" href="https://nameless-plateau-27580.herokuapp.com/users">Tech Tracker</Button>
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row>
                        <Col xs={2} md={2}>
                            <Image src="https://i.imgur.com/KX1HPWd.png" alt="CookBook" thumbnail />
                            <Button bsStyle="primary" bsSize="large" href="https://cook-book-app.herokuapp.com/">Cook Book</Button>
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row>
                        <Col xs={2} md={2}>
                            <Image src="https://i.imgur.com/xo1P2k0.jpg" alt="MyDiary" thumbnail />
                            <Button bsStyle="primary" bsSize="large" href="https://my-diary-wdi15.herokuapp.com/">My Diary</Button> 
                        </Col>
                    </Row>
                </Grid>
                </ProjectsStyle>
                <Footer />
            </div>
        )
    }
}

export default ProjectsPage;