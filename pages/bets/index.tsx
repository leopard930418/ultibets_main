import { Box, Flex } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import BettingCardList from '../../components/bets/card/BettingCardList'
import HomeCurosel from '../../components/Container/Curosel'
import { AppContext } from '../../state/AppProvider'
import { BettingData } from '../../Constants/BettingData'

const bets = () => {
  const { state } = useContext(AppContext)
  const wWidth = state.w_width.w_width;
  // const initHeight = (window.innerHeight-70).toString()+"px";
  // const [wWidth, setWHeight] = useState(500)
  // const getWWidth: any = () => {
  //   setWHeight(window.innerWidth)
  // }
  // useEffect(() => {
  //   window.addEventListener('resize', getWWidth)
  //   console.log(wWidth)
  //   return () => {
  //     window.removeEventListener('resize', getWWidth)
  //   }
  // }, [wWidth])
  // useEffect(() => {
  //   setWHeight(window.innerWidth)
  // }, [])
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
          // height={'82vh'} minHeight={'1000px'}
        >
          <div>
            <BettingCardList
              gameType={state.game.game}
              bettingData={BettingData}
            />
          </div>
        </Flex>
      </Box>
    </>
  )
}

export default bets
