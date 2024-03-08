// SubscriptionScreen.js

import React from 'react';
import './Subscription.css';

const SubscriptionScreen = () => {
  // Sample data for subscription list and saved videos list
  const subscriptionList = [
    { id: 1, channelName: 'Channel 1', subscribers: '100k', url: 'https://example.com/channel1' },
    { id: 2, channelName: 'Channel 2', subscribers: '50k', url: 'https://example.com/channel2' },
    { id: 3, channelName: 'Channel 3', subscribers: '200k', url: 'https://example.com/channel3' },
  ];

  const savedVideosList = [
    { id: 1, videoTitle: 'Video 1', channelName: 'Channel 1', url: 'https://example.com/video1' },
    { id: 2, videoTitle: 'Video 2', channelName: 'Channel 2', url: 'https://example.com/video2' },
    { id: 3, videoTitle: 'Video 3', channelName: 'Channel 3', url: 'https://example.com/video3' },
  ];

  return (
    <div className="subscription-container">
      <h2>Subscriptions</h2>
      <div className="subscription-list">
        {/* Display subscription list items */}
        {subscriptionList.map((item) => (
          <a key={item.id} href={item.url} className="subscription-item">
            <img src={`https://via.placeholder.com/150?text=${item.channelName}`} alt="Channel" />
            <div className="subscription-details">
              <h3>{item.channelName}</h3>
              <p>{item.subscribers} subscribers</p>
            </div>
          </a>
        ))}
      </div>

      <h2>Saved Videos</h2>
      <div className="saved-videos-list">
        {/* Display saved videos list items */}
        {savedVideosList.map((item) => (
          <a key={item.id} href={item.url} className="saved-video-item">
            <img src={`https://via.placeholder.com/150?text=${item.videoTitle}`} alt="Video" />
            <div className="saved-video-details">
              <h3>{item.videoTitle}</h3>
              <p>{item.channelName}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionScreen;
