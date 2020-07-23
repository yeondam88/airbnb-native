import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator, ScrollView } from 'react-native';
import RoomCard from '../../../components/RoomCard';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default ({ rooms }) => {
  return (
    <Container>
      {rooms.length === 0 ? (
        <ActivityIndicator color="black" />
      ) : (
        <ScrollView
          style={{ width: '100%', marginTop: 120 }}
          contentContainerStyle={{ paddingHorizontal: 15 }}
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
        </ScrollView>
      )}
    </Container>
  );
};
