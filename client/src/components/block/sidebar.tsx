import React from 'react';
import Channels from './channels';
import Menu from './menu';

const Sidebar: React.FC = () => (
  <div className="flex w-64 flex-shrink-0 flex-col border-r border-gray-900 bg-zinc-900 text-gray-50">
    <Menu />
    <Channels />
  </div>
);
export default Sidebar;
