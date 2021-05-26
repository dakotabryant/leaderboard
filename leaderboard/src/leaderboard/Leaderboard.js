import React from 'react'
import { LeaderBoardContainer } from './styles'
import { PauseButton, Placement } from '../components'

export const Leaderboard = ({
  placements,
  setShouldFetchRacers,
  shouldFetchRacers,
  isRace,
  altTextKey,
  altText,
  title
}) => {
  if (placements.length === 0) return <h2>Loading</h2>
  return (
    <LeaderBoardContainer>
      {title && <h2 className="title">{title}</h2>}
      {setShouldFetchRacers && (
        <PauseButton onClick={setShouldFetchRacers} isPaused={shouldFetchRacers} />
      )}
      {placements.map((placement) => (
        <Placement
          key={placement.name ?? placement.racer.name}
          name={placement.name ?? placement.racer.name}
          placement={placement}
          isRace={isRace}
          altText={
            altText && altTextKey
              ? `${altText}: ${placement[altTextKey]}`
              : `Lap: ${placement.racer.laps}`
          }
          position={placement.position}
        />
      ))}
    </LeaderBoardContainer>
  )
}
