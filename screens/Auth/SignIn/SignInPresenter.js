import React from 'react';
import styled from 'styled-components/native';
import Button from '../../../components/Auth/Button';
import Input from '../../../components/Auth/Input';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import DismissKeyboard from '../../../components/DismissKeyboard';
import { Logo } from '../../../components/Shared';
import config from '../../../config';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export default ({ email, setEmail, password, setPassword, handleSubmit }) => {
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Logo
              source={{ uri: config.LOGO_URI }}
              style={{ marginBottom: 20 }}
            />
            <Input
              value={email}
              placeholder="Email"
              keyboardType={'email-address'}
              autoCapitalize="none"
              stateFn={setEmail}
            />
            <Input
              value={password}
              placeholder="Password"
              isPassword={true}
              stateFn={setPassword}
            />
          </InputContainer>
          <Button onPress={handleSubmit} text={'Sign In'} accent />
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
