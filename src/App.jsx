import React, { useState } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friendsData from './friends.json';
import NavBar from './components/NavBar';

function App() {
  const [friends, setFriends] = useState(friendsData);
  const [selectedFriend, setSelectedFriend] = useState(null); // State to track the selected friend
  const [isPopoverVisible, setIsPopoverVisible] = useState(false); // State to manage popover visibility

  const deleteFriend = (id) => {
    const newFriends = friends.filter(friend => friend.id !== id);
    setFriends(newFriends);
  };

  const handleCardClick = (friend) => {
    setSelectedFriend(friend); // Set the selected friend
    setIsPopoverVisible(true); // Show the popover
  };

  const closePopover = () => {
    setIsPopoverVisible(false); // Hide the popover
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
            onClick={() => handleCardClick(friend)} // Pass handleCardClick as onClick prop to FriendCard
          />
        ))}
      </Wrapper>
      <NavBar />
      {isPopoverVisible && ( // Render the popover if isPopoverVisible is true
        <div className="popover">
          <p>Name: {selectedFriend.name}</p>
          <p>Occupation: {selectedFriend.occupation}</p>
          <p>Location: {selectedFriend.location}</p>
          <button onClick={closePopover}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
