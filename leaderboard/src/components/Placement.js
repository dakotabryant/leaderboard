import React from 'react'
import { shellRacer } from '../leaderboard/service'
import { PlacementContainer, RacerNameplate, Position } from '../leaderboard/styles'
import { RacerIcon } from './'
const Placement = ({ placement: { racer, position } }) => {
  return (
    <PlacementContainer layout onClick={() => shellRacer(racer.name)}>
      <Position>{position}</Position>
      <RacerNameplate>
        <h1>{racer.name}</h1>
        <RacerIcon racerName={racer.name} />
      </RacerNameplate>
      <p>Lap: {racer.laps}</p>
    </PlacementContainer>
  )
}

export default Placement
