import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Link, useDisclosure } from '@chakra-ui/react'
import NextLink from 'next/link'
import '@fontsource/nunito'
import NavLink from './Navlink'
import Account from '../Account'
import React, { useState, useEffect } from 'react'

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
    <>
      {wWidth > 3000 ? (
        <Box
          // position="fixed"
          zIndex={10}
          h={['full', 'unset', '160px', '160px']}
          bg="#1F1F1F"
        >
          {' '}
          <Box
            display={['flex', 'flex', 'block', 'block']}
            bg="#1F1F1F"
            h={['full', 'unset', '160px', '160px']}
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
                        width={['130px', 'unset', '130px', '170px']}
                        marginLeft={'28px'}
                        marginTop={'15px'}
                        marginRight={'20px'}
                      />
                      <Box
                        opacity={0.8}
                        // zIndex={-1}
                        position={'absolute'}
                        width={'289px'}
                        height={'289px'}
                        marginLeft={['-70px']}
                        marginTop={['-160px']}
                        background={
                          'radial-gradient(50% 50% at 50% 50%, rgba(225, 137, 51, 0.5) 0%, rgba(225, 136, 51, 0.5) 0.01%, rgba(190, 59, 49, 0) 100%)'
                        }
                      />{' '}
                    </Link>
                  </NextLink>
                </Flex>

                <Flex>
                  <Flex
                    display={['none', 'none', 'flex', 'flex']}
                    width={['unset', 'unset', '100%', '100%']}
                    mt={['unset', 'unset', 7, 14]}
                    height={['unset', 'unset', 15, 30]}
                    gap={['unset', 'unset', '10px', 4, 16]}
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
                    mt={['unset', 'unset', '17px', '28px']}
                    mr={'20px'}
                    display={['none', 'none', 'flex', 'flex']}
                    gap={'20px'}
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
      ) : (
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
                        width={['80%']}
                        mt={'10px'}
                        ml={'40px'}
                      />
                      <Box
                        opacity={0.8}
                        // zIndex={-1}
                        position={'absolute'}
                        width={'289px'}
                        height={'289px'}
                        marginLeft={['-100px']}
                        marginTop={['-160px']}
                        background={
                          'radial-gradient(50% 50% at 50% 50%, rgba(225, 137, 51, 0.5) 0%, rgba(225, 136, 51, 0.5) 0.01%, rgba(190, 59, 49, 0) 100%)'
                        }
                      />{' '}
                    </Link>
                  </NextLink>
                </Flex>
                <Flex
                  width={['100vw', '100vw', 'auto', '100%']}
                  justifyContent={'space-between'}
                  display={['flex', 'flex', 'flex', 'none']}
                >
                  <Image
                    src="/images/svgs/bg/logo-vector.svg"
                    alt="logo"
                    ml={'4'}
                    mt={'4'}
                    width={['80%']}
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
      )}
    </>
  )
}

export default Header
