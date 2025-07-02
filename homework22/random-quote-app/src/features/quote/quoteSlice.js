import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchQuote = createAsyncThunk('quote/fetchQuote', async () => {
  const proxyUrl = 'https://api.allorigins.win/get?url=';
  const targetUrl = 'https://zenquotes.io/api/random';
  const response = await axios.get(
    proxyUrl + encodeURIComponent(`${targetUrl}?timestamp=${Date.now()}`)
  );
  const data = JSON.parse(response.data.contents);
  return data[0];
});

const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    text: '',
    author: '',
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.text = action.payload.q;
        state.author = action.payload.a;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;




// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchQuote = createAsyncThunk('quote/fetchRandomQuote', async () => {
//   const response = await axios.get('https://api.quotable.io/random');
//   return response.data;
// });

// const quoteSlice = createSlice({
//   name: 'quote',
//   initialState: {
//     quote: null,
//     author: null,
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchQuote.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchQuote.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.quote = action.payload.content;
//         state.author = action.payload.author;
//       })
//       .addCase(fetchQuote.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default quoteSlice.reducer;  
