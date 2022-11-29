import { Grid } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import Bettingcard from './Bettingcard'
import { BettingcardProps } from '../../../components/bets/card/Bettingcard'

type BettingCardListProps = {
  gameType: string;
  bettingData: Array<BettingcardProps>;
};
const BettingCardList = ({
  gameType,
  bettingData,
}: BettingCardListProps) => {
  const [wWidth, setWWidth] = useState(500)
  const getWWidth: any = () => {
    setWWidth(window.innerWidth)
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
    <Grid
      gridTemplateColumns={[
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(4, 1fr)',
      ]}
      mt="20px"
      gap={wWidth<3000?'50px':'200px'}
      ml={['40px', '30px', '20px', '5px']}
      p={'10px'}
    >
      {bettingData?.map((item, key) => (
        item.bettingType == gameType ? (<Bettingcard
          id={item.id}
          key={item.id}
          series={item.series}
          team1={item.team1}
          team2={item.team2}
          bettingLogo={item.bettingLogo}
          bettingType={item.bettingType}
          bettingTime={item.bettingTime}
          bettingDate={item.bettingDate}
          bettingDeadline={item.bettingDeadline}
          bettingVolume={item.bettingVolume}
        />):(<></>)
        
          
      ))}
    </Grid>
  )
}

export default BettingCardList
