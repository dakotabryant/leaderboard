import React from 'react'
import { LeaderBoardContainer } from './styles'
import './Leaderboard.css'
import { PauseButton, Placement } from '../components'

export const Leaderboard = ({ placements, setShouldFetchRacers, shouldFetchRacers }) => {
  if (placements.length === 0) return <h2>Loading</h2>
  return (
    <LeaderBoardContainer>
      {setShouldFetchRacers && (
        <PauseButton onClick={setShouldFetchRacers} isPaused={shouldFetchRacers} />
      )}
      {placements.map((placement) => (
        <Placement key={placement.racer.name} placement={placement} />
      ))}
    </LeaderBoardContainer>
  )
}
