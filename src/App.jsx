import React, { useState } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friendsData from './friends.json';
import NavBar from './components/NavBar';
import Loading from './components/Loading';

function App() {
  const [friends, setFriends] = useState(friendsData);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const deleteFriend = (id) => {
    const newFriends = friends.filter(friend => friend.id !== id);
    setFriends(newFriends);
  };

  const handleCardClick = (friend) => {
    setSelectedFriend(friend);
    setIsPopoverVisible(true);
  };

  const totalFriendsCount = friendsData.length;
  const remainingFriendsCount = friends.length;

  return (
    <div>
      <Wrapper>
        <Title>Rahmatullah Zadran Portofolio</Title>
        {remainingFriendsCount === 0 ? (
          <Loading remainingFriends={remainingFriendsCount} totalFriends={totalFriendsCount} />
        ) : (
          friends.slice(0, 8).map(friend => (
            <FriendCard
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
              deleteFriend={() => deleteFriend(friend.id)}
              onClick={() => handleCardClick(friend)}
            />
          ))
        )}
      </Wrapper>
  
  <Loading remainingFriends={remainingFriendsCount} totalFriends={totalFriendsCount} />
      <NavBar />
      {isPopoverVisible && (
        <div className="popover">
          <p>Name: {selectedFriend.name}</p>
          <p>Occupation: {selectedFriend.occupation}</p>
          <p>Location: {selectedFriend.location}</p>
          <button onClick={() => setIsPopoverVisible(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
