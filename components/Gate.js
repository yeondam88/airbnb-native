import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logIn, logOut } from '../redux/usersSlice';
import Auth from '../navigation/Auth';
import { NavigationContainer } from '@react-navigation/native';

export default () => {
  const { isLoggedIn } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <TouchableOpacity
          onPress={() => dispatch(logOut())}
          style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
        >
          <Text>Log Out</Text>
        </TouchableOpacity>
      ) : (
        <Auth />
      )}
    </NavigationContainer>
  );
};
