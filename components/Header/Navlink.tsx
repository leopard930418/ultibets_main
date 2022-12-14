import {
  Box,
  keyframes,
  Link,
  Text,
  usePrefersReducedMotion,
} from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { AppContext } from '../../state/AppProvider'
import { useContext, useEffect } from 'react'
import { GAME } from '../../state/ActionTypes'
import {useState} from 'react'
type NavlinkProps = {
  href: string
  name: string
  onClose?: () => void
  footer?: boolean
}

export default function NavLink({ name, href, onClose, footer }: NavlinkProps) {
  const router = useRouter()
  const currentRoute = router.pathname
  const handleClose = () => {
    onClose
  }
  const prefersReducedMotion = usePrefersReducedMotion()
  const { dispatch } = useContext(AppContext)
  
  const [wWidth, setWWidth] = useState(500)
  // if (typeof window !== "undefined") {
  //   setWWidth(window.innerWidth)
  //   // console.log('wWidth', wWidth)
  // }
  const getWWidth: any = () => {
    setWWidth(window.innerWidth)
    console.log("navlink", wWidth);
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
  
  // left to right animation
  const spin = keyframes`
   0%   { transform: translateX(-100px); }

  //  25%  { transform: translateX(20px); }

   50%  { transform: translateX(50px); }

    // 75%  { transform: translateX(20px); }

    100% { 
      transform: translateX(0%);
     } 
`

  // keyframes scrollText {
  //   from {
  //     transform: translateX(0%);
  //   }

  //   to {
  //     transform: translateX(-50%);
  //   }
  // }

  const spin2 = keyframes`
  from { 

    transform: translateX(-10px)

  

   }
  to { transform: translateX(10px)


   }
`

  // create animation for moving text to the left and hid when its  overflow the container

  const scrollText = keyframes`
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(50%);
    overflow: hidden;


  }
`

  const animation = `${spin2} 1s linear infinite alternate`
  // animation: floatText ;

  // const animation = prefersReducedMotion
  //   ? undefined
  //   : `${spin} infinite 20s linear`

  //   from {
  //     left: 00%;
  //   }

  //   to {
  //     /* left: auto; */
  //     left: 100%;
  //   }
  // }

  return (
    <Box position={'relative'}>
      <Box>
        {' '}
        {/* <NextLink href={href} passHref>
        <Text
          boxSizing="border-box"
          _focus={{
            border: 'none',
          }}
          _hover={{
            color: 'red',
            cursor: 'pointer',
          }}
          onClick={onClose}
          color={currentRoute === href ? '#E18833' : 'white'}
          fontSize={['16px', '16px', '14px', '18px']}
          padding={'5px'}
          pl={'20px'}
          fontFamily={'Nunito'}
          fontWeight={'bold'}
        >
          {name}
        </Text>
      </NextLink> */}
        <NextLink href={href} passHref>
          <Box
          // width={name === 'Squid Bet Competition' ? '100px' : 'unset'}
          // animation={name === 'Squid Bet Competition' ? animation : undefined}
          >
            <Link
              color={currentRoute === href ? '#E18833' : 'white'}
              _focus={{
                border: 'none',
                color: '#E18833',
              }}
              _hover={{
                color: '#E18833',
              }}
              onClick={() => {
                handleClose()
                dispatch({
                  type: GAME,
                  payload: { game: 'World Cup' },
                })
              }}
              fontSize={['14px', '14px', '13px', wWidth>3000? (footer ? '28px' : '36px'):(footer ? '14px' : '18px')]}
              fontFamily={'Nunito'}
              fontWeight={'bold'}
            >
              {name}
            </Link>
          </Box>
        </NextLink>
      </Box>
    </Box>
  )
}
