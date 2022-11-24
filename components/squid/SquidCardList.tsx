import { Grid } from '@chakra-ui/react'
import React from 'react'

import { SquidCardProps } from '../../components/squid/SquidCard'
import SquidCard from './SquidCard'

type SquidCardListProps = {
  gameType: string;
  squidData: Array<SquidCardProps>;
};
const SquidCardList = ({
  gameType,
  squidData,
}: SquidCardListProps) => {
  return (
    <Grid
      gridTemplateColumns={[
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(4, 1fr)',
      ]}
      mt="20px"
      gap={'50px'}
      ml={['40px', '30px', '20px', '5px']}
      p={'10px'}
    >
      {squidData.map((item) => (
        item.bettingType == gameType ? (
        <SquidCard
          id={item.id}
          key={item.id}
          series={item.series}
          // team1={item.team1}
          // team2={item.team2}
          // bettingLogo={item.bettingLogo}
          bettingType={item.bettingType}
          bettingTime={item.bettingTime}
          bettingDate={item.bettingDate}
          bettingDeadline={item.bettingDeadline}
          bettingVolume={item.bettingVolume}
          buttonText={item.buttonText}
          href={item.href}
          sbc={item.sbc}
        />):(<></>)
      ))}
    </Grid>
  )
}

export default SquidCardList
