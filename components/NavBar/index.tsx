import Link from 'next/link'
import { Stack, Flex, Heading, Button, IconButton, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

interface Props {
  withButtons?: boolean
}

const NavBar: React.FC<Props> = ({ withButtons = true }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      align="center"
      as="header"
      direction="row"
      justify="space-between"
      paddingBlock={4}
      paddingInline={4}
    >
      <Link passHref href="/">
        <a>
          <Heading
            as="h1"
            color={colorMode === 'light' ? 'primary.600' : 'primary.500'}
            fontSize="3xl"
            fontWeight="black"
            letterSpacing="tighter"
          >
            MyExpenses
          </Heading>
        </a>
      </Link>
      <Stack align="center" as="nav" direction="row" spacing={2}>
        {withButtons && (
          <>
            <Link passHref href="/login">
              <Button as="a" colorScheme="primary" size="md" variant="solid">
                Login
              </Button>
            </Link>
            <Link passHref href="/register">
              <Button as="a" colorScheme="primary" size="md" variant="outline">
                Register
              </Button>
            </Link>
          </>
        )}
        <IconButton
          aria-label="Toggle color mode"
          colorScheme="primary"
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          size="md"
          variant="ghost"
          onClick={toggleColorMode}
        />
      </Stack>
    </Flex>
  )
}

export default NavBar
