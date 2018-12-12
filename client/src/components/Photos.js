import React from 'react';
import styled from 'styled-components';
import Band_Playing from '../Images/Band_Playing.jpg';
import Holding_Guitar from '../Images/Holding_Guitar.jpg';
import With_Band from '../Images/With_Band.jpg';
import Gear from '../Images/Gear.jpg';
import Acostic from '../Images/Acostic.jpg';
import Angry from '../Images/Angry.jpg';
import Bigband from '../Images/Bigband.jpg';
import Gear2 from '../Images/Gear2.jpg';

class Photos extends React.Component {
  render() {
    return (
      <Body>
        <Top>
          <Photo src={Band_Playing} alt="migule with band"/>
          <Photo src={Holding_Guitar} alt="migule with guitar" />
          <Photo src={With_Band} alt="on stage migule" />
          <Photo src={Gear} alt="Equipment of Migule" />
        </Top>
        <Middle>
          <Photo src={Acostic} alt="Equipment of Migule" />
          <Photo src={Angry} alt="Equipment of Migule" />
          <Photo src={Bigband} alt="Equipment of Migule" />
          <Photo src={Gear2} alt="Equipment of Migule" />
        </Middle>
      </Body>
    )
  }
}
const Body = styled.div`
  background-color: #686868;
`
const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 1em;
`

const Middle = styled.div`
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
