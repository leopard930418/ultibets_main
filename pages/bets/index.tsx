import { Box, Flex } from '@chakra-ui/react'
import React, {useContext}  from 'react'
import BettingCardList from '../../components/bets/card/BettingCardList'
import HomeCurosel from '../../components/Container/Curosel'
import { GAME } from "../../state/ActionTypes";
import { AppContext } from "../../state/AppProvider";
import { BettingData } from '../../constants/BettingData'

const bets = () => {
  const { state} = useContext(AppContext);
  return (
    <>
      <Box
        height={{
          base: 'auto',
          md: 'auto',
          lg: 'auto',
          xl: 'auto',
          xxl: 'auto',
        }}

      >
        <HomeCurosel />
        <Flex justifyContent={'center'}  minHeight={'750px'} >
          <BettingCardList gameType={state.game.game} bettingData={BettingData}/>
        </Flex>
      </Box>
    </>
  )
}

export default bets
