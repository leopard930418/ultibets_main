import { Box, Flex } from '@chakra-ui/react'
import React, {useContext}  from 'react'
import BettingCardList from '../../components/bets/card/BettingCardList'
import SquidCurosel from '../../components/Container/SquidCurosel'
import SquidCardList from '../../components/squid/SquidCardList'
import { GAME } from "../../state/ActionTypes";
import { AppContext } from "../../state/AppProvider";
import { SquidData } from '../../Constants/SquidData'

const SbcHome = () => {
  const { state} = useContext(AppContext);

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
      <Flex justifyContent={'center'}  minHeight={'750px'}>
        <SquidCardList gameType={state.game.game} squidData={SquidData}/>
      </Flex>
    </Box>
  )
}

export default SbcHome
