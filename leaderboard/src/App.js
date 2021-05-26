import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { Leaderboard } from './leaderboard'
import useInterval from './hooks/useInterval'
import { getLeaderboard } from './leaderboard/service'
import bgImage from './assets/mario-background.jpeg'

const GlobalStyle = createGlobalStyle`
.app {
  min-height: 100vh;
  padding: 1em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: url(${bgImage});
  background-size: cover; 
}
* {
  box-sizing: border-box;
}
`

const App = () => {
  const [placements, setPlacements] = useState([])
  const [shouldFetchRacers, setShouldFetchRacers] = useState(true)
  const fetchRacers = async () => {
    const racerPlacements = await getLeaderboard()
    setPlacements(racerPlacements)
  }
  useInterval(() => fetchRacers(), shouldFetchRacers ? 500 : null)
  return (
    <>
      <GlobalStyle />
      <div className="app">
        <Leaderboard
          placements={placements}
          shouldFetchRacers={shouldFetchRacers}
          setShouldFetchRacers={setShouldFetchRacers}
        />
      </div>
    </>
  )
}

export default App
