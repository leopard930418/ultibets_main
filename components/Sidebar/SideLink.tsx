import { Box, Flex, Image, Tooltip } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, {useContext, useEffect, useState} from 'react'
import { GAME } from "../../state/ActionTypes";
import { AppContext } from "../../state/AppProvider";
type SideLinkProps = {
  name: string
  href?: string
  icon: string
}
const SideLink = ({ name, href, icon }: SideLinkProps) => {
  const router = useRouter()
  const currentRoute = router.pathname
  const { state, dispatch } = useContext(AppContext);
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
    <Flex
      ml={'7px'}
      borderRadius={'5px'}
      background={name === state.game.game ? '#FF9100' : 'unset'}
      _hover={{
        background: '#FF9100',
      }}
      // onClick={() => router.push({ pathname: href })}
      onClick={() => {
        dispatch({
          type: GAME,
          payload: { game: name },
        });
        currentRoute.includes('squid-competition') && router.push('/squid-competition')
      }}
    >
      <Tooltip
        label={name}
        hasArrow
        bg={'#FF9100'}
        placement={'top'}
        borderRadius={'5px'}
      >
        <Image
          px={icon === '/images/svgs/sidebar/nfl.svg' ? '4px' : '1px'}
          py={'1px'}
          src={icon}
          alt={name}
          width={['30px', '30px', '42px', wWidth<3000?'42px':'84px']}
          height={['30px', '30px', '42px', wWidth<3000?'42px':'84px']}
        />
      </Tooltip>
    </Flex>
  )
}

export default SideLink
