import React from 'react'
import { shellRacer } from '../leaderboard/service'
import { PlacementContainer, RacerNameplate, Position } from '../leaderboard/styles'
const Placement = ({ placement: { racer, position } }) => {
  return (
    <PlacementContainer layout onClick={() => shellRacer(racer.name)}>
      <Position>{position}</Position>
      <RacerNameplate>
        <h1>{racer.name}</h1>
      </RacerNameplate>
      <p>Lap: {racer.laps}</p>
    </PlacementContainer>
  )
}

export default Placement
