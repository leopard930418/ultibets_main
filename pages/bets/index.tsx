import { Box, Flex } from '@chakra-ui/react'
import React, {useContext, useState, useEffect}  from 'react'
import BettingCardList from '../../components/bets/card/BettingCardList'
import HomeCurosel from '../../components/Container/Curosel'
import { GAME } from "../../state/ActionTypes";
import { AppContext } from "../../state/AppProvider";
import { BettingData } from '../../Constants/BettingData'

const bets = () => {
  const { state} = useContext(AppContext);
  // const initHeight = (window.innerHeight-70).toString()+"px";
  const [wHeight, setWHeight] = useState('500px');
  const getWHeight:any = ()=> {
    setWHeight((window.innerHeight+70).toString()+"px");
  }
  useEffect(()=>{
    window.addEventListener('resize', getWHeight);
    console.log(wHeight);
    return(()=>{
      window.removeEventListener('resize', getWHeight);
    })
  }, [wHeight]);
  useEffect(()=>{
    setWHeight((window.innerHeight).toString()+"px");
  }, []);
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
        <Flex justifyContent={'center'}  minHeight={[ '1000px',wHeight]} >
          <div>

          <BettingCardList gameType={state.game.game} bettingData={BettingData}/>
          </div>
        </Flex>
      </Box>
    </>
  )
}

export default bets
