import React from 'react';
import styled from 'styled-components';

class Videos extends React.Component {
  render() {
    return(
      <>
      <Download>Click to Download</Download>
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

export default Videos