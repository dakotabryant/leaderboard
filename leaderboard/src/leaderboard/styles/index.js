import styled from 'styled-components'
import { motion } from 'framer-motion'
import { media } from '../../utils/responsive'

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
  ${media.tablet`min-width: initial; height: 55px;`};
  p {
    color: white;
    font-size: 1.5rem;
    margin-right: 15px;
  }
`
export const RacerNameplate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  color: white;
  ${media.tablet`min-width: initial;`};
  h1 {
    ${media.tablet`font-size: 16px;`};
  }
`

export const Position = styled.h2`
  font-size: 62px;
  margin: 25px;
  color: white;
  transform: skew(-10deg);
  width: 75px;
  ${media.tablet`font-size: 24px; margin: 5px; width: 25px;`};
`

export const ShellPrompt = styled(motion.div)`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 15px;
  position: absolute;
  right: 0;
  height: 95px;
  img {
    height: 100%;
  }
`
