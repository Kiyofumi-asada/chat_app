import React from 'react';

const ChannelHeader: React.FC = () => (
  <div className="group flex h-8 items-center px-3">
    <div id="channels_toggle" className="flex flex-grow cursor-default items-center focus:outline-none">
      <span className="ml-2 text-sm font-medium leading-none">Channels</span>
    </div>
    <button className="ml-1 flex h-6 w-6 items-center justify-center rounded hover:bg-zinc-700">
      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </button>
  </div>
);
export default ChannelHeader;
