import React, { useState, useEffect } from 'react'
import { LeaderBoardContainer } from './styles'
import './Leaderboard.css'
import { PauseButton } from '../components'

const Placement = ({ placement: { racer, position } }) => (
  <div className="placement">
    <span>{position}</span>
    <header>
      <h1>{racer.name}</h1>
    </header>
    <span>Lap: {racer.laps}</span>
  </div>
)

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
