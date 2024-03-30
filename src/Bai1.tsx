// file Bai1.js
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Alert } from 'react-native';
import { launchCamera, CameraOptions, ImagePickerResponse } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setPhotoUri } from '../photoSlice';
import { setImageUri } from '../imageSlice';

function Bai1(): React.JSX.Element {
  const dispatch = useDispatch();
  const imageUri = useSelector((state) => state.photo ? state.photo.uri : null);

  const onOpenCamera = async () => {
    const cameraOptions: CameraOptions = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
      saveToPhotos: true,
    };
    launchCamera(cameraOptions, (response: ImagePickerResponse) => {
      if (response?.assets && response.assets.length > 0) {
        dispatch(setPhotoUri(response.assets[0].uri));
      } else {
        Alert.alert('Hủy chụp ảnh', response?.errorMessage || 'Bạn đã hủy chụp ảnh');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginBottom: 10 }}>Ảnh của bạn ở đây</Text>
      {imageUri ? <Image style={styles.hinhAnh} source={{ uri: imageUri }} /> : <Image style={styles.hinhAnh} source={require('./img/user.png')} />}
      <TouchableOpacity style={styles.chupHinh} onPress={onOpenCamera}>
        <Text style={{ color: 'black', fontSize: 17 }}>Chụp hình</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Bai1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  chupHinh: {
    position: 'absolute',
    bottom: 10,
    borderRadius: 10,
    backgroundColor: 'orange',
    height: 45,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hinhAnh: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
});
