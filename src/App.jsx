import React, { useState } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friendsData from './friends.json';

function App() {
  const [friends, setFriends] = useState(friendsData);

  const deleteFriend = (id) => {
    const newFriends = friends.filter(friend => friend.id !== id);
    setFriends(newFriends);
  };

  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friends.slice(0, 4).map(friend => (
        <FriendCard
          key={friend.id}
          name={friend.name}
          image={friend.image}
          occupation={friend.occupation}
          location={friend.location}
          deleteFriend={() => deleteFriend(friend.id)}
        />
      ))}
    </Wrapper>
  );
}

export default App;
