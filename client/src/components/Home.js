import React, { Component } from 'react'
// import { Header } from 'semantic-ui-react'
import Miguel_photo0 from '../Images/Miguel_photo0.jpg'
import styled from 'styled-components'
import NavBar from './NavBar'

class Home extends Component {
  render() {
    return (
      <Body>
      {/* <Header as="h1" textAlign="center">Home Component</Header> */}
      <Hero src={Miguel_photo0} alt="Migule playing Guitar" />
      <NavBar />
      </Body>
    );
  }
}
const Hero = styled.img`
  left: 50%;
  width: 20%;
  height: 20%;
`
const Body = styled.div`
 background-color: black;
` 
export default Home


