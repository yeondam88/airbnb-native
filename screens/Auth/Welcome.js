import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { BlurView } from 'expo-blur';
import Button from '../../components/Auth/Button';
import config from '../../config';
import { Logo } from '../../components/Shared';

const Container = styled.View`
  flex: 1;
`;

const Image = styled.Image`
  position: absolute;
  z-index: -1;
  top: 0;
`;

const ButtonContainer = styled.View`
  margin-top: 50px;
`;

export default ({ navigation }) => {
  const goToSignUp = () => navigation.navigate('SignUp');
  const goToSignIn = () => navigation.navigate('SignIn');

  return (
    <Container>
      <BlurView
        intensity={40}
        tint="light"
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Logo source={{ uri: config.LOGO_URI }} />
        <ButtonContainer>
          <Button onPress={goToSignUp} text="Sign Up" accent={true} />
          <Button onPress={goToSignIn} text="Sign In" />
        </ButtonContainer>
      </BlurView>
      <Image source={require('../../assets/loginBg.jpeg')} />
      <StatusBar barStyle="light-content" />
    </Container>
  );
};
