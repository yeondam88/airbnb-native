import React, { useState } from 'react';
import styled from 'styled-components/native';
import { isEmail } from '../../../utils';
import API from '../../../api';
import SignUpPresenter from './SignUpPresenter';

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

export default ({ navigation: { navigate } }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const isFormValid = () => {
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      password === ''
    ) {
      alert('All fields are required.');
      return false;
    }
    if (!isEmail(email)) {
      alert('Please add a valid email');
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    if (!isFormValid()) return;
    setLoading(true);
    try {
      const { status } = await API.createAccount({
        first_name: firstName,
        last_name: lastName,
        email,
        username: email,
        password,
      });

      if (status === 201) {
        alert('Account created, please Sign in.');
        navigate('SignIn', { email, password });
      }
    } catch (err) {
      alert(err);
      console.warn(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SignUpPresenter
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
};
