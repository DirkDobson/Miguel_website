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
import Old from '../Images/Old.jpg';
import Red from '../Images/Red.jpg';
import Soloing from '../Images/Soloing.jpg';
import Studio from '../Images/Studio.jpg'

class Photos extends React.Component {
  render() {
    return (
      <Body>
        <Download>Click to Download</Download>
        <Row>
          <Photo src={Band_Playing} alt="migule with band" />
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
        <Row>
          <Photo src={Old} alt="Miguel with Old Man" />
          <Photo src={Red} alt="Miguel on stage" />
          <Photo src={Soloing} alt="Miguel playing a solo" />
          <Photo src={Studio} alt="Miguel in a Recording Studio" />
        </Row>
      </Body>
    )
  }
}

const Download = styled.h2`
  display: flex;
  justify-content: center;
  padding-top: .1em;
  margin-bottom: 0em;
`
const Body = styled.div`
  background-color: #8B0000;
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


const Photo = styled.img`
  width: 25em;
  height: 25em;
  @media only screen and (max-width: 568px) {
    padding: .5em;
    width: 20em;
    height: 20em;
  }
`
export default Photos
