import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import Miguel_photo0 from '../Images/Miguel_photo0.jpg'
import styled from 'styled-components'

class Home extends Component {
  render() {
    return (
      <Body>
      <Header as="h1" textAlign="center">Home Component</Header>
      <Hero src={Miguel_photo0} alt="Migule playing Guitar" />
      </Body>
    );
  }
}
const Hero = styled.img`
  display: flex;
  justify-content: center;
`
const Body = styled.div`
 background-color: black;
` 
export default Home


