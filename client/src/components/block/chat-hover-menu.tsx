import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const ChatHoverMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const faEllipsisVerticalStyle: React.CSSProperties = { padding: 2, fontSize: 12, color: 'black' };
  const onOpenDropDown = () => {
    setIsOpen(true);
  };
  return (
    <>
      <button
        className="absolute right-0 top-0 m-0.5 h-6 w-6 justify-center rounded-md opacity-0 group-hover:bg-zinc-300 group-hover:opacity-100"
        onClick={onOpenDropDown}
      >
        <FontAwesomeIcon icon={faEllipsisVertical} style={faEllipsisVerticalStyle} />
      </button>
      {isOpen ? (
        <div className="dropdown dropdown-end">
          <ul className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow">
            <li>
              <a>Edit?</a>
            </li>
            <li>
              <a>Delete?</a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default ChatHoverMenu;
