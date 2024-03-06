import React from 'react';
import './style.css';

function Popover({ selectedFriend, setIsPopoverVisible, images }) {
  return (
    <div className="popovers">
      <h3>{selectedFriend.name}</h3>
      {/* Display the corresponding image based on the friend's ID */}
      <img height ={250} width={400} src={images[selectedFriend.id - 1]} alt={selectedFriend.name} />
      <p>Name: {selectedFriend.name}</p>
      <p>Occupation: {selectedFriend.occupation}</p>
      <p>Location: {selectedFriend.location}</p>
      <button onClick={() => setIsPopoverVisible(false)}>Close</button>
    </div>
  );
}

export default Popover;
