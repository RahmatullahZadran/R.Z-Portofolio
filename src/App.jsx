import React, { useState } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friendsData from './friends.json';
import NavBar from './components/NavBar';
import Loading from './components/Loading';
import Popover from './components/Popover';
import image1 from '../src/components/images/github.png';
import image2 from '../src/components/images/React.png';
import image3 from '../src/components/images/html.png';
import image4 from '../src/components/images/css.png';
import image5 from '../src/components/images/java.png';
import image6 from '../src/components/images/jquery.png';
import image7 from '../src/components/images/api.png';
import image8 from '../src/components/images/projectOne.png';
import image9 from '../src/components/images/bootstrap.jpg';
import image10 from '../src/components/images/calender.png';

function App() {
  const [friends, setFriends] = useState(friendsData);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  // Map friend IDs to their corresponding images
  const imageMap = {
    1: image1,
    2: image2,
    3: image3,
    4: image4,
    5: image5,
    6: image6,
    7: image7,
    8: image8,
    9: image9,
    10: image10

    // Add more mappings as needed
  };

  const deleteFriend = (id) => {
    const newFriends = friends.filter(friend => friend.id !== id);
    setFriends(newFriends);

    // If the selected friend is deleted, close the popover
    if (selectedFriend && selectedFriend.id === id) {
      setIsPopoverVisible(false);
      setSelectedFriend(null);
    }
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
        <Title>Rahmatullah Zadran Portfolio</Title>
        {friends.slice(0, 8).map((friend) => (
          <FriendCard
            key={friend.id}
            name={friend.name}
            image={imageMap[friend.id]} // Get image dynamically based on friend ID
            info={friend.info}
            deleteFriend={() => deleteFriend(friend.id)}
            onClick={() => handleCardClick(friend)}
          />
        ))}
      </Wrapper>

      <Loading remainingFriends={remainingFriendsCount} totalFriends={totalFriendsCount} />

      {isPopoverVisible && (
        <Popover
          selectedFriend={selectedFriend}
          setIsPopoverVisible={setIsPopoverVisible}
          imageMap={imageMap} // Pass image map to the Popover component
        />
      )}
      <NavBar />
      {remainingFriendsCount === 0 && (
        <Loading remainingFriends={remainingFriendsCount} totalFriends={totalFriendsCount} />
      )}
    </div>
  );
}

export default App;
