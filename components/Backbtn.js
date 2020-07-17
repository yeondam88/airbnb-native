import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { isAndroid } from '../utils';

const Container = styled.View`
  padding-left: 20px;
`;

export default () => (
  <Container>
    <Ionicons name={isAndroid ? 'md-arrow-down' : 'ios-arrow-down'} size={28} />
  </Container>
);
