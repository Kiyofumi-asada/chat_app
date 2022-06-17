import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteChatData, putChatData } from '../../api/chat';
import { TChatData } from '../../types/chat';
import ChatHoverMenu from './chat-hover-menu';

type TProps = {
  chatData: TChatData;
};

const Chat: React.FC<TProps> = ({ chatData }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(putChatData({ id: chatData.id, userId: 1, userName: 'user1', message: 'hoge' }) as any);
  };
  const handleDelete = () => {
    dispatch(deleteChatData(chatData.id) as any);
  };
  return (
    <>
      {chatData.isDelete ? null : (
        <div className="group relative flex px-4 py-3 hover:bg-gray-100">
          {/* <div onClick={handleDelete}>X</div>
          <div onClick={handleEdit}>edit</div> */}
          <ChatHoverMenu />
          <div className="h-10 w-10 flex-shrink-0 rounded bg-gray-300"></div>
          <div className="ml-2">
            <div className="-mt-1">
              <span className="text-sm font-semibold">{chatData.userName}</span>
              <span className="ml-1 text-xs text-gray-500">{chatData.updated_at}</span>
            </div>
            <p className="text-sm">{chatData.message}</p>
            <div className="mt-1 flex space-x-2">
              <button className="flex h-5 items-center rounded-full bg-gray-300 pl-1 pr-2 text-xs hover:bg-gray-400">
                <span>😊</span>
                <span className="ml-1 font-medium">1</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
