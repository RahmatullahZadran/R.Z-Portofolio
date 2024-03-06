import React from 'react';
import './style.css';


function FriendCard({ name, image, occupation, location, deleteFriend, onClick }) {
  const handleRemoveClick = (event) => {
    event.stopPropagation(); // Prevent event propagation to parent elements
    deleteFriend();
  };

  return (
    <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Occupation:</strong> {occupation}
          </li>
          <li>
            <strong>Address:</strong> {location}
          </li>
        </ul>
      </div>
      <span className="remove" onClick={handleRemoveClick}>𝘅</span>
    </div>
  );
}

export default FriendCard;
