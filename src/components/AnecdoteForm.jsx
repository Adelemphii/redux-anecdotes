import { useDispatch } from "react-redux"

import { createAnecdote } from "../reducers/anecdoteReducer"

import { setNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    dispatch(createAnecdote(content))

    sendNotification(content)
  }

  const sendNotification = (content) => {
    dispatch(setNotification(`Successfully added '${content}'`))
  }

  return(
    <form onSubmit={addAnecdote}>
      <input name='anecdote'/>
      <button type='submit'>Create</button>
    </form>
  )
}

export default AnecdoteForm