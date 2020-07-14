import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import Button from '../../components/Auth/Button';
import Input from '../../components/Auth/Input';
import { StatusBar, KeyboardAvoidingView, Keyboard } from 'react-native';
import DismissKeyboard from '../../components/DismissKeyboard';
import { Logo } from '../../components/Shared';
import config from '../../config';
import { isEmail } from '../../utils';
import { userLogin } from '../../redux/usersSlice';

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

export default ({ route: { params } }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(params?.email);
  const [password, setPassword] = useState(params?.password);
  const isFormValid = () => {
    if (email === '' || password === '') {
      alert('All fields are required.');
      return false;
    }
    if (!isEmail(email)) {
      alert('Email is not valid');
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    if (!isFormValid()) return;
    dispatch(
      userLogin({
        username: email,
        password,
      })
    );
  };
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
