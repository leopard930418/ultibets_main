import { Box, Flex, Text } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import Proposals from '../../components/Governance/proposals'
import Voting from '../../components/Governance/Voting'
import '@fontsource/inter'
import '@fontsource/nunito'

const Governance = () => {
  const [wWidth, setWHeight] = useState(500)
  const getWWidth: any = () => {
    setWHeight(window.innerWidth + 70)
  }
  useEffect(() => {
    window.addEventListener('resize', getWWidth)
    console.log(wWidth)
    return () => {
      window.removeEventListener('resize', getWWidth)
    }
  }, [wWidth])
  useEffect(() => {
    setWHeight(window.innerWidth)
  }, [])
  return (
    <Flex
      mt={'30px'}
      width={'100%'}
      // height={['auto', 'auto', 'auto', '100vh']}
      gap={'50px'}
      justifyContent={'center'}
      alignItems={['center', 'center', 'center', 'start']}
      direction={['column', 'column', 'column', 'row']}
      minHeight={
        wWidth > 5100
          ? '2360px'
          : wWidth > 4000
          ? '1725px'
          : wWidth > 2700
          ? '1090px'
          : wWidth > 1800
          ? '772px'
          : '700px'
      }
    >
      <Voting />

      <Proposals />
    </Flex>
  )
}

export default Governance
