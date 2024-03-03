import React, { useState } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friendsData from './friends.json';
import NavBar from './components/NavBar';

function App() {
  const [friends, setFriends] = useState(friendsData);

  const deleteFriend = (id) => {
    const newFriends = friends.filter(friend => friend.id !== id);
    setFriends(newFriends);
  };

  return (
    <div>
      <Wrapper>
        <Title>Rahmatullah Zadran Portofolio</Title>
        {friends.slice(0, 8).map(friend => (
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
      <NavBar />
    </div>
  );
}

export default App;
