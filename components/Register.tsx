import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Register() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Registro</Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder='Login' placeholderTextColor={'white'}/>
        <TextInput style={styles.input} placeholder='Senha' placeholderTextColor={'white'}/>
      </View>
      <View>
        <Pressable style={styles.button}>
          <Link href='/home' style={styles.text}>Login</Link>
        </Pressable>
      </View>
      <View>
        <Pressable style={styles.button}>
          <Link href='/register' style={styles.text}>Cadastre-se</Link>
        </Pressable>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#150068ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#150068ff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    padding: 5,
    marginTop: 15,
  },
  title: {
    color: 'white',
    fontSize: 50,
    marginBottom: 100,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
    color: 'white',
    borderColor: 'white',
  }
});