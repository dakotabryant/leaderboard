import React from 'react'
import styled from 'styled-components'
import pause from '../assets/pause.png'
import play from '../assets/play.png'

const Button = styled.button`
  background-color: #fff;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  position: absolute;
  top: -15px;
  left: -30px;
  padding: 5px;
  border: none;
  cursor: pointer;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  img {
    width: 80%;
  }
`

const PauseButton = ({ onClick, isPaused }) => {
  return (
    <Button onClick={() => onClick((prevState) => !prevState)}>
      <img src={isPaused ? pause : play} alt="" />
    </Button>
  )
}

export default PauseButton
