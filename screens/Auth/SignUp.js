import React, { useState } from 'react';
import styled from 'styled-components/native';
import Button from '../../components/Auth/Button';
import Input from '../../components/Auth/Input';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import DismissKeyboard from '../../components/DismissKeyboard';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => alert(`${username}, ${password}`);
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Input
              value={firstName}
              placeholder="First Name"
              autoCapitalize="none"
              stateFn={setFirstName}
            />
            <Input
              value={lastName}
              placeholder="Last Name"
              autoCapitalize="none"
              stateFn={setLastName}
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
          <Button onPress={handleSubmit} text={'Sign Up'} accent />
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
