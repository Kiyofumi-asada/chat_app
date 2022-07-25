import React from 'react';
import { HotKeys } from 'react-hotkeys';
import Main from './presentation/components/main';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  const hotKeyMap = {
    enterSearch: 'command+k',
  };
  const hotKeyHandlers = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    enterSearch: (e: any) => {
      e.preventDefault();
      (document.querySelector('#postChat') as HTMLElement).focus();
      return;
    },
  };
  return (
    <HotKeys keyMap={hotKeyMap} handlers={hotKeyHandlers}>
      <div className="app">
        <BrowserRouter>
          <Routes>
            {/* <Route index element={} /> */}
            <Route path="chat" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </div>
    </HotKeys>
  );
};

export default App;
