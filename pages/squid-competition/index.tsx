import { Box, Flex } from '@chakra-ui/react'
import React, { useContext, useState, useEffect } from 'react'
import BettingCardList from '../../components/bets/card/BettingCardList'
import SquidCurosel from '../../components/Container/SquidCurosel'
import SquidCardList from '../../components/squid/SquidCardList'
import { GAME } from '../../state/ActionTypes'
import { AppContext } from '../../state/AppProvider'
import { SquidData } from '../../Constants/SquidData'

const SbcHome = () => {
  const { state } = useContext(AppContext)
  // const initHeight = (window.innerHeight-70).toString()+"px";
  const [wWidth, setWWidth] = useState(500)
  const getWWidth: any = () => {
    setWWidth(window.innerWidth + 70)
  }
  useEffect(() => {
    window.addEventListener('resize', getWWidth)
    return () => {
      window.removeEventListener('resize', getWWidth)
    }
  }, [wWidth])
  useEffect(() => {
    setWWidth(window.innerWidth)
  }, [])
  return (
    <Box
      height={{
        base: 'auto',
        md: 'auto',
        lg: 'auto',
        xl: 'auto',
        xxl: '100vh',
      }}
    >
      <SquidCurosel />
      <Flex
        justifyContent={'center'}
        minHeight={
          wWidth > 5100
            ? '2090px'
            : wWidth > 4000
            ? '1455px'
            : wWidth > 2700
            ? '820px'
            : wWidth > 1800
            ? '730px'
            : wWidth > 1700
            ? '790px'
            : '700px'
        }
      >
        <div>
          <SquidCardList gameType={state.game.game} squidData={SquidData} />
        </div>
      </Flex>
    </Box>
  )
}

export default SbcHome
