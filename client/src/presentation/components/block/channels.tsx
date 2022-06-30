import React from 'react';
import ChannelHeader from './channel-header';
import ChannelList from './channel-list';

const Channels: React.FC = () => (
  <div className="mt-4 h-0 flex-grow overflow-auto">
    <ChannelHeader />
    <ChannelList />
  </div>
);
export default Channels;
