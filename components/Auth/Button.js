import React from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import colors from '../../colors';

const { width } = Dimensions.get('screen');

const ButtonComp = styled.View`
  padding: 10px 0;
  margin-bottom: 25px;
  align-items: center;
  border-radius: 30px;
  border: 1px solid ${(props) => (props.accent ? 'transparent' : colors.black)};
  width: ${width / 1.5}px;
  background-color: ${(props) => (props.accent ? colors.red : 'transparent')};
`;
const Text = styled.Text`
  color: ${(props) => (props.accent ? 'white' : colors.black)};
  font-weight: 600;
  font-size: 14px;
`;

const Button = ({ onPress, text, accent = false }) => (
  <TouchableOpacity onPress={onPress}>
    <ButtonComp accent={accent}>
      <Text accent={accent}>{text}</Text>
    </ButtonComp>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  accent: PropTypes.bool,
};

export default Button;
