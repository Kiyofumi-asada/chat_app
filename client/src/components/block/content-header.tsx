import React from 'react';

const Content: React.FC = () => (
  <div className="flex h-16 flex-shrink-0 items-center border-b border-gray-300 bg-white px-4">
    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
        clipRule="evenodd"
      />
    </svg>
    <div>
      <h1 className="text-sm font-bold leading-none">channelA</h1>
    </div>
  </div>
);

export default Content;
