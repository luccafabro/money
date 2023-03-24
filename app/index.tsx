import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Login() {
  return (
    <View>
      <Text>Login</Text>
      <Link href="/home">go to Home</Link>
    </View>
  )
}