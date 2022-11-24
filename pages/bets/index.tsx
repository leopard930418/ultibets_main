import { Box, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import BettingCardList from '../../components/bets/card/BettingCardList'
import SquidCardList from '../../components/squid/SquidCardList'
import HomeCurosel from '../../components/Container/Curosel'
import { GAME } from '../../state/ActionTypes'
import { AppContext } from '../../state/AppProvider'
import { BettingData } from '../../Constants/BettingData'
import { SquidData } from '../../Constants/SquidData'
const bets = () => {
  const { state } = useContext(AppContext)
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
        <Flex justifyContent={'center'} minHeight={'750px'}>
          <Box height={'auto'}>
            {state.game.game == 'Squid Bet Competitions' ? (
              <SquidCardList gameType={state.game.game} squidData={SquidData} />
            ) : (
              <BettingCardList
                gameType={state.game.game}
                bettingData={BettingData}
              />
            )}
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default bets
