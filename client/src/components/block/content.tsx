import React from 'react';
import ChatList from './chat-list';
import ContentHeader from './content-header';
import PostMessage from './post-message';

const Content: React.FC = () => (
  <div className="flex flex-grow flex-col">
    <ContentHeader />
    <ChatList />
    <PostMessage />
  </div>
);

export default Content;
