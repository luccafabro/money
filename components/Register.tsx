import { NativeBaseProvider, Box, HStack, VStack, Text, Pressable, Image, Center, extendTheme, Input, Stack, Button } from 'native-base';
import React from 'react'
import { Link } from 'expo-router'

export default function Register() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box alignItems="center" bg="primary.50" size="full">
        <Text fontSize="5xl" marginTop="100" color="white">Mon€y</Text>
        <Stack space={4} w="75%" maxW="300px" mx="auto" marginTop="50">
          <Input size="lg" placeholder="Nome" color="white"/>
          <Input size="lg" placeholder="Senha" color="white" />
          <Input size="lg" placeholder="Confirme sua senha" color="white" />
          <VStack space={4} alignItems="center" marginTop="60">
            <Button bg="primary.50" variant="outline">
              <Link href="/home">
                Registre-se
              </Link>
            </Button>
          </VStack>
        </Stack>
      </Box>
    </NativeBaseProvider>
  )
}

const theme = extendTheme({
  colors: {
    primary: {
      50: '#150068ff'
    }
  }
})