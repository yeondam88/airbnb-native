import React from 'react';
import styled from 'styled-components/native';
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import RoomCard from '../../../components/RoomCard';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 15px;
`;

const FakeBar = styled.View`
  height: 40px;
  width: 100%;
  box-shadow: 1px 5px 5px rgba(200, 200, 200, 0.5);
  margin: 80px 0px 10px 0px;
  background-color: white;
  border-radius: 15px;
  justify-content: center;
  padding-left: 10px;
`;

const FakeText = styled.Text`
  font-size: 16px;
  font-weight: 300;
`;

export default ({ rooms, increasePage }) => {
  return (
    <Container>
      {rooms.length === 0 ? (
        <ActivityIndicator color="black" />
      ) : (
        <>
          <FakeBar>
            <FakeText>Search...</FakeText>
          </FakeBar>
          <ScrollView
            style={{ width: '100%' }}
            contentContainerStyle={{ paddingTop: 30 }}
            showsVerticalScrollIndicator={false}
          >
            {rooms.map((room) => {
              return (
                <RoomCard
                  key={room.id}
                  price={room.price}
                  name={room.name}
                  id={room.id}
                  isSuperHost={room.user.superhost}
                  isFav={room.is_fav}
                  photos={room.photos}
                />
              );
            })}
            <TouchableOpacity onPress={increasePage}>
              <Text>Load More</Text>
            </TouchableOpacity>
          </ScrollView>
        </>
      )}
    </Container>
  );
};
