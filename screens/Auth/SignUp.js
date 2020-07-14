import React, { useState } from 'react';
import styled from 'styled-components/native';
import Button from '../../components/Auth/Button';
import Input from '../../components/Auth/Input';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import DismissKeyboard from '../../components/DismissKeyboard';
import { Logo } from '../../components/Shared';
import config from '../../config';
import { isEmail } from '../../utils';
import { createAccount } from '../../api';

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

export default () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validateForm = () => {
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      password === ''
    ) {
      alert('All fields are required.');
      return;
    }
    if (!isEmail(email)) {
      alert('Please add a valid email');
      return;
    }
  };
  const handleSubmit = async () => {
    validateForm();
    try {
      const data = await createAccount({
        first_name: firstName,
        last_name: lastName,
        email,
        username: email,
        password,
      });
      console.log(data);
    } catch (err) {
      console.warn(err);
    }
  };
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
          <Button onPress={handleSubmit} text={'Sign Up'} accent />
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
