import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { isEmail } from '../../../utils';
import { userLogin } from '../../../redux/usersSlice';
import SignInPresenter from './SignInPresenter';

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
    <SignInPresenter
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};
