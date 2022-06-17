import React from 'react';
import { useDispatch } from 'react-redux';
import { postChatData } from '../../api/chat';

const PostMessage: React.FC = () => {
  const dispatch = useDispatch();
  const messageRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    dispatch(postChatData({ userId: 1, userName: 'user1', message: messageRef.current?.value }) as any);
  };

  return (
    <div className="mb-2 h-12 px-1 pb-1">
      <div className="flex items-center rounded-sm border border-gray-300 p-1">
        <input
          id="postChat"
          className="ml-1 flex-grow resize-none border-gray-300 px-2 text-sm"
          placeholder="メッセージを送信する[⌘K]"
          ref={messageRef}
        ></input>
        <button
          type="button"
          onClick={handleSubmit}
          className="flex h-6 w-6 flex-shrink items-center justify-center rounded outline-none"
        >
          <svg className="h-4 w-4 rotate-90 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default PostMessage;
