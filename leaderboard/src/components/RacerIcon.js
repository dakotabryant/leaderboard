import React from 'react'
import styled from 'styled-components'
import characterSprite from '../assets/racerSprite.png'
import { spriteLocation } from '../utils/constants'

const Icon = styled.div`
  height: 130px;
  width: 130px;
  background: url(${characterSprite});
  background-position: ${(props) =>
    spriteLocation[props.racerName]
      ? `-${spriteLocation[props.racerName][0] * 130}px -${
          spriteLocation[props.racerName][1] * 130
        }px`
      : `-${spriteLocation.unknown[0] * 130}px -${spriteLocation.unknown[1] * 130}px`};
  transform: scale(0.5);
`

const RacerIcon = ({ racerName }) => {
  return <Icon racerName={racerName} />
}

export default RacerIcon
