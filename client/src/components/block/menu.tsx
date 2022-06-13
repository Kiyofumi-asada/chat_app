import React from 'react';

const Menu: React.FC = () => (
  <button className="group relative flex-shrink-0 text-sm focus:outline-none">
    <div className="hover:bg-zinc-700s flex h-16 w-full items-center justify-between border-b px-4">
      <span className="font-medium">Menu</span>
      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="absolute z-10 hidden w-full flex-col items-start bg-gray-500 pb-1 shadow-lg group-focus:flex">
      <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">
        Logout
      </a>
    </div>
  </button>
);
export default Menu;
