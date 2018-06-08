import React, { Component } from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
display: flex;
justify-content: center;
background-color: black;
padding: 100px;
color:grey;
border: solid black 1px;
width: 100vw;
height: 45vh;`

class Footer extends Component {
    render() {
        return (
            <div id="contact">
                <FooterStyle >
                    <div>
                    <p>Copyright 2018, Rose Dimple George, WDI 15, General Assembly, Atlanta, GA</p>
                    </div>
                </FooterStyle>
            </div>
        )
    }
}

export default Footer