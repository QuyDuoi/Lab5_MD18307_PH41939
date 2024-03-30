import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ImageLibraryOptions, ImagePickerResponse, OptionsCommon, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setImageUri } from '../imageSlice';
import { setPhotoUri } from '../photoSlice';

function Bai2(): React.JSX.Element {
  const dispatch = useDispatch();
  const imageUri = useSelector((state) => state.image ? state.image.imageUri : null);

  const commonOptions: OptionsCommon = {
    mediaType: 'photo',
    maxWidth: 500,
    maxHeight: 500,
  };

  const libraryOptions: ImageLibraryOptions = {
    selectionLimit: 1,
    ...commonOptions,
  };

  const onOpenLibrary = async () => {
    try {
      const response: ImagePickerResponse = await launchImageLibrary(libraryOptions);
      if (!response.didCancel && response.assets && response.assets.length > 0) {
        dispatch(setImageUri(response.assets[0].uri));
      }
    } catch (error) {
      console.error('Error while opening image library:', error);
      Alert.alert('Có lỗi xảy ra', 'Không thể mở thư viện ảnh');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black', marginBottom: 10}}>Ảnh của bản ở đây</Text>
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={styles.hinhAnh}
        />
      ) : (
        <Image
          source={require('./img/user.png')}
          style={styles.hinhAnh}
        />
      )}
      <TouchableOpacity style={styles.chupHinh} onPress={onOpenLibrary}>
        <Text style={{ color: 'black', fontSize: 17 }}>Chọn ảnh từ thư viện</Text>
      </TouchableOpacity>
    </View>
  )
}

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

export default Bai2;
