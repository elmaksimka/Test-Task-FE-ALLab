import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  jobs: [],
  error: ''
}

export const fetchJobs = createAsyncThunk('job/fetchJobs', () => {
  return axios
    .get('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
    .then(response => response.data)
})

const jobSlice = createSlice({
  name: 'job',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchJobs.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.loading = false
      state.jobs = action.payload
      state.error = ''
    })
    builder.addCase(fetchJobs.rejected, (state, action) => {
      state.loading = false
      state.jobs = []
      state.error = action.error.message
    })
  }
})

export default jobSlice.reducer