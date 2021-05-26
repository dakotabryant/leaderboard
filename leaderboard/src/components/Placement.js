import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { shellRacer } from '../leaderboard/service'
import { PlacementContainer, RacerNameplate, Position, ShellPrompt } from '../leaderboard/styles'
import { RacerIcon } from './'
import blueShell from '../assets/blueShell.png'

const Placement = ({ placement: { racer, position } }) => {
  const [showShell, setShowShell] = useState(false)
  return (
    <PlacementContainer
      layout
      onHoverStart={() => setShowShell(true)}
      onHoverEnd={() => setShowShell(false)}
      onClick={() => shellRacer(racer.name)}
    >
      <Position>{position}</Position>
      <RacerNameplate>
        <h1>{racer.name}</h1>
        <RacerIcon racerName={racer.name} />
      </RacerNameplate>
      <p>Lap: {racer.laps}</p>
      {showShell && (
        <AnimatePresence>
          <ShellPrompt
            initial={{ opacity: 0, x: '-50px' }}
            animate={{ opacity: 1, x: '0' }}
            exit={{ opacity: 0, x: '-50px' }}
          >
            <img src={blueShell} alt="" />
          </ShellPrompt>
        </AnimatePresence>
      )}
    </PlacementContainer>
  )
}

export default Placement
