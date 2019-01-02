import React from 'react';
import LimeRush from '../Images/LimeRush.mp4'
import styled from 'styled-components';

class Videos extends React.Component {
  render() {
    return(
      <>
      <Download>Click to Download</Download>
      <Row>
        <LimeRush/>
      </Row>
      <Row>
        
      </Row>
      </>
    )
  }
}

const Download = styled.h2`
  display: flex;
  justify-content: center;
  padding-top: .1em;
  margin-bottom: 0em;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 1em;
  @media only screen and (max-width: 568px) {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`

export default Videos