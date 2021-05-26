import React, { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { Leaderboard } from './leaderboard'
import useInterval from './hooks/useInterval'
import { getItems, getLeaderboard } from './leaderboard/service'
import bgImage from './assets/mario-background.jpeg'
import { media } from './utils/responsive'

const GlobalStyle = createGlobalStyle`
.app {
  min-height: 100vh;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${bgImage});
  background-size: cover; 
  ${media.laptop`flex-direction: column`};
}
* {
  box-sizing: border-box;
}
`

const App = () => {
  const [placements, setPlacements] = useState([])
  const [items, setItems] = useState([])
  const [shouldFetchRacers, setShouldFetchRacers] = useState(true)
  const fetchItems = async () => {
    const items = await getItems()
    return items
  }
  const fetchRacers = async () => {
    const racerPlacements = await getLeaderboard()
    setPlacements(racerPlacements)
  }

  useEffect(async () => {
    const items = await fetchItems()
    setItems(items)
  }, [setItems])

  useInterval(() => fetchRacers(), shouldFetchRacers ? 500 : null)
  return (
    <>
      <GlobalStyle />
      <div className="app">
        <Leaderboard
          placements={placements}
          shouldFetchRacers={shouldFetchRacers}
          setShouldFetchRacers={setShouldFetchRacers}
          title="Racers"
          isRace
        />
        <Leaderboard title="Items" placements={items} altTextKey="power_level" altText="Power Level" />
      </div>
    </>
  )
}

export default App
