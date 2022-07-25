import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { putChatData } from '../../../api/chat';
import { TChatData } from '../../../types/chat';
import { convertTimeZone2DateStr } from '../../converter';
import { defaultUserIcon } from '../../helper/chat';
import ChatModalMenu from './chat-modal-menu';

type TProps = {
  chatData: TChatData;
};

const Chat: React.FC<TProps> = ({ chatData }) => {
  //react,redux
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editingText, setEditingText] = useState<string>('');
  useEffect(() => {
    setEditingText(chatData.message);
  }, []);
  //dispatch
  const handleSubmit = async () => {
    await dispatch(putChatData({ id: chatData.id, userName: 'user1', message: editingText ?? '' }) as any);
    await setIsEdit(false);
  };
  return (
    <>
      {chatData.isDelete ? null : (
        <div className="group relative flex px-4 py-3 hover:bg-gray-100">
          <ChatModalMenu chatData={chatData} setIsEdit={setIsEdit} />
          <div className="h-10 w-10 flex-shrink-0 rounded bg-gray-300">
            <img src={!chatData.userIcon ? defaultUserIcon : chatData.userIcon} />
          </div>
          <div className="mb-2 h-12 px-1 pb-1">
            {isEdit ? (
              <div className="flex h-full items-center rounded-sm p-1">
                <textarea
                  name="editingText"
                  className="ml-1 w-9/12 flex-grow resize-none border-gray-300 px-2 text-sm focus:outline-none"
                  placeholder="メッセージを編集"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button type="button" className="cursor-pointer" onClick={handleSubmit}>
                  save
                </button>
              </div>
            ) : (
              <>
                <div className="-mt-1">
                  <span className="text-sm font-semibold">{chatData.userName}</span>
                  <span className="ml-1 text-xs text-gray-500">{convertTimeZone2DateStr(chatData.updated_at)}</span>
                </div>
                <p className="text-sm">{chatData.message}</p>
                {/* <div className="mt-1 flex space-x-2">
                  <button className="flex h-5 items-center rounded-full bg-gray-300 pl-1 pr-2 text-xs hover:bg-gray-400">
                    <span>😊</span>
                    <span className="ml-1 font-medium">1</span>
                  </button>
                </div> */}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
