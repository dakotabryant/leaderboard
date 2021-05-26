import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { shellRacer } from '../leaderboard/service'
import { PlacementContainer, RacerNameplate, Position, ShellPrompt } from '../leaderboard/styles'
import { RacerIcon } from './'
import blueShell from '../assets/blueShell.png'

const Placement = ({ position, name, altText, isRace }) => {
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
        <h1>{name}</h1>
        <RacerIcon racerName={name} />
      </RacerNameplate>
      <p>{altText}</p>
      {showShell && isRace && (
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
