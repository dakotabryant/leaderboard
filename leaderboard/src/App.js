import React, { useState } from 'react'
import { Leaderboard } from './leaderboard'
import useInterval from './hooks/useInterval'
import './App.css'
import { getLeaderboard } from './leaderboard/service'

const App = () => {
  const [placements, setPlacements] = useState([])
  const [shouldFetchRacers, setShouldFetchRacers] = useState(true)
  const fetchRacers = async () => {
    const racerPlacements = await getLeaderboard()
    setPlacements(racerPlacements)
  }
  useInterval(() => fetchRacers(), shouldFetchRacers ? 1000 : null)
  return (
    <div className="app">
      <Leaderboard
        placements={placements}
        shouldFetchRacers={shouldFetchRacers}
        setShouldFetchRacers={setShouldFetchRacers}
      />
    </div>
  )
}

export default App
