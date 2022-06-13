import React from 'react';
import Content from './block/content';
import Sidebar from './block/sidebar';

const Main: React.FC = () => (
  <div className="flex h-screen w-screen text-gray-700">
    <Sidebar />
    <Content />
  </div>
);

export default Main;
