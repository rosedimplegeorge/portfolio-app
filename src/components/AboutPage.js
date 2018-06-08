import React, { Component } from 'react';
import NavBar from './NavBar'
import styled from 'styled-components'
import Footer from './Footer'

const AboutStyled = styled.div`
width: 100vw;
height: 60vh;
border: solid black 1px;
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
}`

class AboutPage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <AboutStyled >
                <p>Hi ! I am Rose Dimple George.I am a full stack developer with a passion for development. I have an entry level of knowledge in front end development using my preferred front end framework, React, in addition to a proficiency using Express, MongoDB, Ruby on Rails, and PostgreSQL as my Controllers and Models. My code is consistent, clean, easy to read. I work well with others, learn fast, and have exceptional communication skills when helping a teammate through a difficult problem.Check out my  GitHub and give me your feedback.</p>
                </AboutStyled>
                <Footer />
            </div>
        );
    }
}

export default AboutPage;