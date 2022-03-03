import type { NextPage } from 'next'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import Head from 'next/head'
import {
  Flex,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Input,
  Button,
  useTheme,
  Link as ChakraLink,
  useColorMode,
} from '@chakra-ui/react'

import NavBar from '../components/NavBar'

interface FormData {
  email: string
  password: string
}

const Login: NextPage = () => {
  const { colorMode } = useColorMode()
  const theme = useTheme()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const [showPassword, setShowPassword] = React.useState<boolean>(false)

  const onSubmit = (values: FormData) => {
    console.log(values)
  }

  return (
    <>
      <Head>
        <title>MyExpenses | Login</title>
      </Head>
      <NavBar withButtons={false} />
      <Flex
        align="center"
        flexDirection="column"
        justify="center"
        justifySelf="center"
        w="min(500px, 90%)"
      >
        <Stack
          as="form"
          autoComplete="off"
          borderRadius={4}
          boxShadow={
            colorMode === 'light'
              ? `0 0 15px 5px ${theme.colors.gray[200]}`
              : `0 0 15px 5px ${theme.colors.primary[900]}`
          }
          paddingBlock={8}
          paddingInline={8}
          position="relative"
          spacing={4}
          w="full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl id="email" isInvalid={Boolean(errors.email)}>
            <FormLabel fontSize="sm">Email</FormLabel>
            <Input
              focusBorderColor={colorMode === 'light' ? 'primary.600' : 'primary.700'}
              fontSize="sm"
              type="email"
              variant="outline"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            <FormErrorMessage fontSize="xs">
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl id="password" isInvalid={Boolean(errors.password)}>
            <FormLabel fontSize="sm">Password</FormLabel>
            <InputGroup>
              <Input
                focusBorderColor={colorMode === 'light' ? 'primary.600' : 'primary.700'}
                fontSize="sm"
                type={showPassword ? 'text' : 'password'}
                variant="outline"
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 8, message: 'Password must be at least 8 characters' },
                })}
              />
              <InputRightElement w="4rem">
                <Button
                  colorScheme="primary"
                  size="xs"
                  variant="ghost"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage fontSize="xs">
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button colorScheme="primary" fontSize="md" isLoading={isSubmitting} type="submit">
            Login
          </Button>
          <Stack alignSelf="center" direction="row" marginTop={2} spacing={4}>
            <Link passHref href="/register">
              <ChakraLink fontSize="xs">Create new account</ChakraLink>
            </Link>
            <Link passHref href="/">
              <ChakraLink fontSize="xs">Forgot password?</ChakraLink>
            </Link>
          </Stack>
        </Stack>
      </Flex>
    </>
  )
}

export default Login
