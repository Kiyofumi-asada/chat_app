import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetChatList } from '../../../api/chat';
import { selectChatList } from '../../../redux/chat/slice';
import Spinner from '../atom/spinner';
import Chat from './chat';

const ChatList: React.FC = () => {
  //react,redux
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const chatData = useSelector(selectChatList);
  //dispatch
  useEffect(() => {
    dispatch(fetchGetChatList() as any);
    setIsLoading(false);
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <div className="mt-80 flex flex-grow justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-grow flex-col overflow-auto overscroll-none">
          {chatData.map((data) => (
            <Chat key={data.id} chatData={data} />
          ))}
        </div>
      )}
    </>
  );
};

export default ChatList;
