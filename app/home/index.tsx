import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Home from '../../components/Home'

export default function buildHome() {
  return (
    <Home/>
  )
}

const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});