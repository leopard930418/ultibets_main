import { Box, Flex } from '@chakra-ui/react'
import React, {useContext, useState, useEffect}  from 'react'
import BettingCardList from '../../components/bets/card/BettingCardList'
import SquidCurosel from '../../components/Container/SquidCurosel'
import SquidCardList from '../../components/squid/SquidCardList'
import { GAME } from "../../state/ActionTypes";
import { AppContext } from "../../state/AppProvider";
import { SquidData } from '../../Constants/SquidData'

const SbcHome = () => {
  const { state} = useContext(AppContext);
  const initHeight = (window.innerHeight+70).toString()+"px";
  const [wHeight, setWHeight] = useState(initHeight);
  const getWHeight:any = ()=> {
    setWHeight((window.innerHeight-70).toString()+"px");
  }
  useEffect(()=>{
    window.addEventListener('resize', getWHeight);
    console.log('wheight', wHeight);
    return(()=>{
      window.removeEventListener('resize', getWHeight);
    })
  }, [wHeight]);
  useEffect(()=>{
    setWHeight((window.innerHeight+70).toString()+"px");
  }, []);
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
      <Flex justifyContent={'center'}  minHeight={['1000px',wHeight]} >
        <div>
        <SquidCardList gameType={state.game.game} squidData={SquidData}/>
        </div>
      </Flex>
    </Box>
  )
}

export default SbcHome
