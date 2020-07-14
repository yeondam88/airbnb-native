import React from 'react';
import styled from 'styled-components/native';
import Button from '../../components/Auth/Button';

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const TextInput = styled.TextInput``;

export default () => {
  const handleSubmit = () => alert('sending data..');
  return (
    <Container>
      <TextInput placeholder="Username"></TextInput>
      <TextInput placeholder="Password" secureTextEntry></TextInput>
      <Button onPress={handleSubmit} text={'Sign In'} accent />
    </Container>
  );
};
