import React, { Component } from 'react'
// import { Header } from 'semantic-ui-react'
import Miguel_photo0 from '../Images/Miguel_photo0.jpg'
import LimeRush from '../Images/LimeRush.mp4'
import styled from 'styled-components'
import NavBar from './NavBar'

class Home extends Component {
  render() {
    return (
      <Body>
      {/* <Header as="h1" textAlign="center">Home Component</Header> */}
      <Hero src={Miguel_photo0} alt="Migule playing Guitar" />
      <NavBar />
      <div>
        <Description>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Description>
        <video width="400" controls>
          <source src={LimeRush} type="video/mp4" />
        </video>
      </div>
      </Body>
    );
  }
}
const Hero = styled.img`
  width: 20%;
  height: 20%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`
const Body = styled.div`
 background-color: black;
` 

const Description = styled.section`
  color: white;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  text-align: center;
`
export default Home


