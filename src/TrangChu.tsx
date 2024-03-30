import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

function TrangChu ({navigation}): React.JSX.Element {
  return (
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style = {{color: 'black', fontSize: 25, fontWeight: 'bold'}}>Lab 5 - MD18307 - PH41939</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Bai1')}
      style = {{backgroundColor: '#00BFFF', marginTop: 20, width: 200, height: 50, alignItems: 'center', justifyContent: 'center'}}>
        <Text style = {{padding: 10,color: 'black', fontSize: 18, fontWeight: 'bold',}}>Ứng dụng chụp ảnh</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Bai2')}
      style = {{backgroundColor: '#00BFFF', marginTop: 15, width: 200, height: 50, alignItems: 'center', justifyContent: 'center'}}>
        <Text style = {{padding: 10,color: 'black', fontSize: 18, fontWeight: 'bold',}}>Ứng dụng chọn ảnh</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default TrangChu

const styles = StyleSheet.create({})