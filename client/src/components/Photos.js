import React from 'react';
import styled from 'styled-components';
import {
  Image
} from 'semantic-ui-react'
import Band_Playing from '../Images/Band_Playing.jpg';
import Holding_Guitar from '../Images/Holding_Guitar.jpg';
import With_Band from '../Images/With_Band.jpg';

class Photos extends React.Component {
  render() {
    return (
      <Body>
        <Image src={Band_Playing} />
        <Image src={Holding_Guitar} />
        <Image src={With_Band} />
      </Body>
    )
  }
}
const Body = styled.div`
  background-color: #686868;
  display: flex;
  flex-direction row;
`
export default Photos
