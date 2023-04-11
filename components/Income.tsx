import { Center ,NativeBaseProvider, Box, HStack, VStack, Text, extendTheme, Avatar, Badge, Fab, Icon, FlatList } from 'native-base';
import React from 'react'
import { Link } from 'expo-router'
import { AntDesign } from "@expo/vector-icons";

export default function Income() {
  return (
    <NativeBaseProvider theme={theme}>
        <FlatList data={data} renderItem={({
            item
        }) =>
            <Text>{item.name}</Text>
        
        }
        />
    </NativeBaseProvider>
  )
}

const data = [
    {
        name:"Salário",
        description:"Quantia mensal que recebo em troca do meu serviço",
        value:"R$ 5000"
    },
    {
        name:"Rendimentos",
        description:"Valor que recebo dos meus investimentos",
        value:"R$ 350"
    },
    {
        name:"Freelance",
        description:"Serviço sem contrato que faço para aumentar minha renda",
        value:"R$ 740"
    },
]

const theme = extendTheme({
    colors: {
      primary: {
        50: '#150068ff'
      }
    }
  })