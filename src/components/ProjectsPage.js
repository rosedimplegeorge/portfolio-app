import React, { Component } from 'react';
import NavBar from './NavBar'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
                <h1>Projects</h1>
                <div>
                    <p>Project 1 </p>
                    <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>Jeopardy</Button>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Jeopardy Game</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h6>Jeopardy game built with JavaScript, jQuery, CSS, Bootstrap, and HTML</h6>
                            <hr />
                            <p>Click below to see my application deployed on Bitballoon</p>
                           <a href="http://clever-swartz-16d5a5.bitballoon.com/"><Button bsStyle="info">Play Jeopardy</Button></a>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    <p>Project 2</p>
                    <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>Jeopardy</Button>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Technical Skills Tracker</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h6>Full Stack Application Built with Express, MongoDB and Handlebars</h6>
                            <hr />
                            <p>Click below to see my application deployed on Heroku</p>
                            <Button bsStyle="info">First Full Stack Application</Button>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    <p>Project 3 </p>
                    <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>Jeopardy</Button>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Cook Book</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h6>MERN Stack Application</h6>
                            <hr />
                            <p>Click below to see my application deployed on Heroku</p>
                            <Button bsStyle="info">See my CookBook</Button>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    <p>Project 4 </p>
                    <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>Jeopardy</Button>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Vegabond</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h6>Group Project- Full Stack Application using Ruby on Rails, PostgreSQL,and React</h6>
                            <hr />
                            <p>Click below to see my application deployed on Heroku</p>
                            <Button bsStyle="info">Vegabond</Button>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    <p>Project 5 - Capstone Project</p>
                    <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>Jeopardy</Button>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>My Diary</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h6>Jeopardy game built with JavaScript, jQuery, CSS, Bootstrap, and HTML</h6>
                            <hr />
                            <p>Click below to see my application deployed on Heroku</p>
                            <Button bsStyle="info">Play Jeopardy</Button>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default ProjectsPage;