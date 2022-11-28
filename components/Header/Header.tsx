import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Link, useDisclosure } from '@chakra-ui/react'
import NextLink from 'next/link'
import '@fontsource/nunito'
import NavLink from './Navlink'
import Account from '../Account'
import React, { useContext, useState, useEffect } from 'react'
import {AppContext} from '../../state/AppProvider'
import { W_WIDTH } from '../../state/ActionTypes'

const Header = () => {
  const LinkArray = [
    {
      name: 'Home',
      href: 'https://ultibets.vercel.app/',
    },
    {
      name: 'Prediction Markets',
      href: '/bets',
    },

    {
      name: 'Squid Bet Competition',
      href: '/squid-competition',
    },
    {
      name: 'UtBets Token',
      href: '/utbets-token',
    },
    {
      name: 'Governance',
      href: '/governance',
    },
    {
      name: 'Merch Store',
      href: 'https://ultibetsmerchstore.vercel.app/merch-store',
    },
    {
      name: 'FAQ',
      href: '/faq',
    },
  ]
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => (isOpen ? onClose() : onOpen())

  const { dispatch } = useContext(AppContext)
  // const initHeight = (window.innerHeight-70).toString()+"px";
  const [wWidth, setWHeight] = useState(500)
  const getWWidth: any = () => {
    setWHeight(wWidth)
    
    dispatch({
      type: W_WIDTH,
      payload: { w_width: window.innerWidth },
    });
  }
  useEffect(() => {
    window.addEventListener('resize', getWWidth)
    return () => {
      window.removeEventListener('resize', getWWidth)
    }
  }, [wWidth])
  useEffect(() => {
    setWHeight(window.innerWidth)
    
  }, [])

  return (
    <>
    
      <Box
        // position="fixed"
        zIndex={10}
        h={['full', 'unset', '80px', '80px']}
        bg="#1F1F1F"
      >
        {' '}
        <Box
          display={['flex', 'flex', 'block', 'block']}
          bg="#1F1F1F"
          h={['full', 'unset', '80px', '80px']}
          width={'100%'}
          // position={'fixed'}
          justifyContent={[
            'space-between',
            'space-between',
            'center',
            'space-between',
          ]}
          alignItems={'center'}
        >
          <header>
            <Flex justifyContent={'space-between'}>
              <Flex
                justifyContent={'center'}
                alignItems="center"
                display={['none', 'none', 'none', 'flex']}
              >
                <NextLink href="/" passHref>
                  <Link>
                    {' '}
                    <Image
                      src="/images/svgs/with-color-logo.svg"
                      alt="logo"
                      width={['200px', 'unset', '200px', '250px']}
                    />
                  </Link>
                </NextLink>
              </Flex>
              <Flex
                width={['100vw', '100vw', 'auto', '100%']}
                justifyContent={'space-between'}
                display={['flex', 'flex', 'flex', 'none']}
              >
                <Image
                  src="/images/svgs/logo-vector.svg"
                  alt="logo"
                  width={['160px', '80px', '150px', '100%']}
                />

                <Flex
                  mr={'10px'}
                  alignItems="center"
                  display={['flex', 'flex', 'none', 'none']}
                >
                  {isOpen ? (
                    <CloseIcon
                      color={'white'}
                      fontSize="28px"
                      onClick={handleToggle}
                    />
                  ) : (
                    <HamburgerIcon
                      color={'white'}
                      fontSize="30px"
                      onClick={handleToggle}
                    />
                  )}
                </Flex>
              </Flex>
              <Flex>
                <Flex
                  display={['none', 'none', 'flex', 'flex']}
                  width={['unset', 'unset', '100%', '100%']}
                  mt={['unset', 'unset', 7, 7]}
                  height={['unset', 'unset', 15, 15]}
                  gap={['unset', 'unset', '10px', 4, 8]}
                  ml={['unset', 'unset', '10px']}
                  alignItems={['unset', 'unset', 'center', 'center']}
                >
                  {LinkArray.map((item, index) => (
                    <NavLink key={index} name={item.name} href={item.href} />
                  ))}
                </Flex>
              </Flex>
              <Flex>
                <Flex
                  mt={['unset', 'unset', '17px', '14px']}
                  mr={'10px'}
                  display={['none', 'none', 'flex', 'flex']}
                  gap={'10px'}
                >
                  <Account />
                </Flex>{' '}
              </Flex>
            </Flex>
          </header>
        </Box>
        <Flex
          display={[isOpen ? 'flex' : 'none', 'none', 'none', 'none']}
          gap={'10px'}
          width={'100%'}
        >
          {' '}
          <Flex direction={'column'}>
            {LinkArray.map((item, index) => (
              <NavLink
                key={index}
                href={item.href}
                name={item.name}
                onClose={onClose}
              />
            ))}
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Header
