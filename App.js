import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Text, Image } from 'react-native';
import { Asset } from 'expo-asset';

const cacheImages = (images) =>
  images.map((image) => {
    console.log(image);
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const handleFinish = () => {
    setIsReady(true);
  };
  const loadAssets = async () => {
    const images = [
      require('./assets/login-bg.jpeg'),
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngguru.com%2Ffree-transparent-background-png-clipart-mucfk&psig=AOvVaw3YR_0ySMfG_GwU-iX0_FSz&ust=1593312292636000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiNx_38oOoCFQAAAAAdAAAAABAD',
    ];

    cacheImages(images);
  };
  return isReady ? (
    <Text>I'm ready</Text>
  ) : (
    <AppLoading
      onError={console.error}
      handleFinish={handleFinish}
      startAsync={loadAssets}
    />
  );
}
