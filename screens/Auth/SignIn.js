import React, { useState } from 'react';
import styled from 'styled-components/native';
import Button from '../../components/Auth/Button';
import Input from '../../components/Auth/Input';
import { StatusBar, KeyboardAvoidingView, Keyboard } from 'react-native';
import DismissKeyboard from '../../components/DismissKeyboard';
import { Logo } from '../../components/Shared';
import config from '../../config';

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

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => alert(`${username}, ${password}`);
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
              value={username}
              placeholder="Username"
              autoCapitalize="none"
              stateFn={setUsername}
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
