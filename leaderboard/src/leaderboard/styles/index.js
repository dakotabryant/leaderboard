import styled from 'styled-components'
import { motion } from 'framer-motion'


export const LeaderBoardContainer = styled.div`
  position: relative;
`
export const PlacementContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  background-color: rgba(0, 0, 0, 0.95);
  min-width: 750px;
  height: 95px;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 15px;
  p {
    color: white;
    font-size: 24px;
    margin-right: 15px;
  }
`
export const RacerNameplate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  color: white;
`

export const Position = styled.h2`
  font-size: 62px;
  margin: 25px;
  color: white;
  transform: skew(-10deg);
  width: 75px;
`
