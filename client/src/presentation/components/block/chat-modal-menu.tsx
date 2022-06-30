import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { putChatData, deleteChatData } from '../../../api/chat';
import { TChatData } from '../../../types/chat';

type TProps = {
  chatData: TChatData;
  setIsEdit: any;
};

const ChatModalMenu: React.FC<TProps> = ({ chatData, setIsEdit }) => {
  //react,redux
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //variable
  const faEllipsisVerticalStyle: React.CSSProperties = { padding: 2, fontSize: 12, color: 'black' };
  //function
  const onOpenDropDown = (e: any) => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  //dispatch
  /**
   * call put api
   */
  const handleEdit = () => {
    console;
    dispatch(putChatData({ id: chatData.id, userId: 1, userName: 'user1', message: 'hugahugahua' }) as any);
    setIsOpen(false);
  };
  /**
   * call delete api
   */
  const handleDelete = () => {
    dispatch(deleteChatData(chatData.id) as any);
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="absolute right-0 top-0 m-0.5 h-6 w-6 justify-center rounded-md opacity-0 group-hover:bg-zinc-300 group-hover:opacity-100"
        onClick={(e) => {
          onOpenDropDown(e);
        }}
      >
        <FontAwesomeIcon icon={faEllipsisVertical} style={faEllipsisVerticalStyle} />
      </button>
      {isOpen ? (
        <div className="absolute right-7 -mt-5 w-10 origin-top-right bg-white text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="cursor-pointer px-2 pt-4 pb-2 hover:bg-zinc-100" role="none">
            <div onClick={setIsEdit(true)}>編集</div>
          </div>
          <div className="cursor-pointer py-2 px-2 hover:bg-zinc-100" role="none">
            <div onClick={handleDelete}>削除</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ChatModalMenu;
