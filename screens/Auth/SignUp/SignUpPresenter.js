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
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
`;

export default ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  loading,
}) => {
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Logo
              source={{ uri: config.LOGO_URI }}
              style={{ marginBottom: 10 }}
            />
            <Input
              value={firstName}
              placeholder="First Name"
              autoCapitalize="words"
              stateFn={setFirstName}
            />
            <Input
              value={lastName}
              placeholder="Last Name"
              autoCapitalize="words"
              stateFn={setLastName}
            />
            <Input
              keyboardType={'email-address'}
              value={email}
              placeholder="Email"
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
          <Button
            onPress={handleSubmit}
            text={'Sign Up'}
            accent
            loading={loading}
          />
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
