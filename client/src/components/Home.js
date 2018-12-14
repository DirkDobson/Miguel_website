import React, { Component } from 'react'
import Band_Playing from '../Images/Band_Playing.jpg';
import Holding_Guitar from '../Images/Holding_Guitar.jpg';
import With_Band from '../Images/With_Band.jpg';
import Facebook_logo from '../Images/Facebook_logo.png'
import Youtube_logo from '../Images/Youtube_logo.jpeg'
import LimeRush from '../Images/LimeRush.mp4'
import styled from 'styled-components'

class Home extends Component {
  state = { 
    i: 0,
    photos: [
    <Loop src={With_Band} alt="Migule with Band"/>,
    <Loop src={Band_Playing} alt="Migule with Band"/>,
    <Loop src={Holding_Guitar} alt="Migule on Stage"/>,
  ],
   }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({i: this.state.i + 1})
      if(this.state.i >= this.state.photos.length){
        this.setState({i: 0})
      }
    }, 3000)
  }

  componentWillUnomount(){
    clearInterval(this.interval)
  }

  ArrayLoop = () => {
    let {i, photos} = this.state
    for(i; photos.length;){
      return(photos[i])
    }
    this.setState(i = 0)
  }

  render() {
    return (
      <Body>
      <Title>Miguel Guitarist</Title>
        <Miguel controls>
        Limelight
          <source src={LimeRush} type="video/mp4" />
        </Miguel>
        <Description>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
         totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
         dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
          sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
           voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit 
           laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit 
           qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum 
           fugiat quo voluptas nulla pariatur? End
        </Description>
        <Divid>
         <Par>These are photos of Miguel</Par> {this.ArrayLoop()}
        </Divid>
      <Divid>
        <Logos src={Facebook_logo} alt="facebook logo" />
        <Logos src={Youtube_logo} alt="Youtube logo" />     
      </Divid>
      </Body>
    );
  }
}

const Body = styled.div`
 background-color: #686868;
 padding-top: 2em;
 height: 100%;
` 

const Loop = styled.img`
  height: 20em;
  width: 20em;
`

const Title = styled.h1`
color: black;
display: flex;
justify-content: center;
font-size: 2em;
margin-top 10px;
`

const Description = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 1.5em;
  padding: 2.5em;
`

const Divid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
`

const Miguel = styled.video`
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const Par = styled.p`
  color: black;
  display: flex;
  justify-content: center;
  font-size: 1.2em;
  margin-top 10px;
`
const Logos = styled.img`
  width: 24px;
  height: 24px;
  padding-right: 1em;
  padding-left: 1em;
`
export default Home


