import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TChatData } from '../../types/chat';

const path = 'chat';

// GET
export const fetchGetChatList = createAsyncThunk('chat/fetchChatList', async () => {
  const { status, data } = await axios.get<TChatData[]>(path);
  return { status, data };
});

// POST
export const postChatData = createAsyncThunk('chat/postChatData', async (body: any) => {
  const { status, data } = await axios.post<TChatData[]>(path, body);
  return { status, data };
});
