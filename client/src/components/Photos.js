import React from 'react';
import styled from 'styled-components';
import Band_Playing from '../Images/Band_Playing.jpg';
import Holding_Guitar from '../Images/Holding_Guitar.jpg';
import With_Band from '../Images/With_Band.jpg';
import Gear from '../Images/Gear.jpg';
import Acoustic from '../Images/Acoustic.jpg';
import Angry from '../Images/Angry.jpg';
import Bigband from '../Images/Bigband.jpg';
import Gear2 from '../Images/Gear2.jpg';
import Computer from '../Images/Computer.jpg';
import Live_Miguel from '../Images/Live_Miguel.jpg';
import Three from '../Images/Three.jpg';
import Pedals from '../Images/Pedals.jpg';

class Photos extends React.Component {
  render() {
    return (
      <Body>
        <Row>
          <Photo src={Band_Playing} alt="migule with band"/>
          <Photo src={Holding_Guitar} alt="migule with guitar" />
          <Photo src={With_Band} alt="on stage migule" />
          <Photo src={Gear} alt="Equipment of Migule" />
        </Row>
        <Row>
          <Photo src={Acoustic} alt="Equipment of Migule" />
          <Photo src={Angry} alt="Miguel looking angry" />
          <Photo src={Bigband} alt="Miguel with Big Band" />
          <Photo src={Gear2} alt="Equipment of Migule" />
        </Row>
        <Row>
          <Photo src={Computer} alt="Miguel's computer" /> 
          <Photo src={Live_Miguel} alt="Miguel playing live" />
          <Photo src={Three} alt="Miguel with three people" />
          <Photo src={Pedals} alt="Pedals of Miguel" />
        </Row>
      </Body>
    )
  }
}
const Body = styled.div`
  background-color: #686868;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 1em;
`


const Photo = styled.img`
  width: 25em;
  height: 25em;
`
export default Photos
