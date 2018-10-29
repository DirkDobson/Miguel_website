import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import Miguel_photo0 from '../Images/Miguel_photo0.jpg'

class Home extends Component {
  render() {
    return (
      <>
      <Header as="h1" textAlign="center">Home Component</Header>
      <img src={Miguel_photo0} alt="Migule playing Guitar" />
      </>
    );
  }
}

export default Home;

