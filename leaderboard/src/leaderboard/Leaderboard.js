import React, { useState, useEffect } from 'react'
import { getLeaderboard } from './service'
import './Leaderboard.css'

const Placement = ({ placement: { racer, position } }) => (
  <div className='placement'>
    <span>{position}</span>
    <header>
      <h1>{racer.name}</h1>
    </header>
    <span>Lap: {racer.laps}</span>
  </div>
)

export const Leaderboard = () => {
  const [placements, setPlacements] = useState([])
  useEffect(() => {
    const fetch = async () => {
      const placements = await getLeaderboard()
      setPlacements(placements)
    }

    fetch()
  }, [setPlacements])

  return (
    <div>
      {placements.map(placement => <Placement key={placement.racer.name} placement={placement} />)}
    </div>
  )
}
