import React, { useState } from 'react';
import { TChatData } from '../../../types/chat';
import { convertTimeZone2DateStr } from '../../converter';
import ChatModalMenu from './chat-modal-menu';

type TProps = {
  chatData: TChatData;
};

const Chat: React.FC<TProps> = ({ chatData }) => {
  //react,redux
  const [isEdit, setIsEdit] = useState<boolean>(false);
  console.log(isEdit);
  return (
    <>
      {chatData.isDelete ? null : (
        <div className="group relative flex px-4 py-3 hover:bg-gray-100">
          <ChatModalMenu chatData={chatData} setIsEdit={setIsEdit} />
          <div className="h-10 w-10 flex-shrink-0 rounded bg-gray-300"></div>
          <div className="ml-2">
            <div className="-mt-1">
              <span className="text-sm font-semibold">{chatData.userName}</span>
              <span className="ml-1 text-xs text-gray-500">{convertTimeZone2DateStr(chatData.updated_at)}</span>
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
