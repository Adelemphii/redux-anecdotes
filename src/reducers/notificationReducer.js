import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    notificationChange(state, action) {
      return action.payload
    },
    clearNotification(state, action) {
      return ''
    }
  }
})

export const { notificationChange, clearNotification } = notificationSlice.actions

export const setNotification = (message, timeInSeconds = 5) => {
  return async dispatch => {
    dispatch(notificationChange(message))
    setTimeout(() => {
      dispatch(clearNotification())
    }, timeInSeconds * 1000)
  }
}

export default notificationSlice.reducer