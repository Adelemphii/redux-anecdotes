import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <li>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </li>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)
  const anecdotes = useSelector(state => state.anecdotes)
  const sortedAndFiltered = [...anecdotes]
    .sort((a, b) => b.votes - a.votes)
    .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))

  const sendNotification = (content) => {
    dispatch(setNotification(`You voted for '${content}'`))
  }
  
  return(
    <div>
      <ul>
        {sortedAndFiltered.map(anecdote =>
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => {
              dispatch(addVote(anecdote.id))
              sendNotification(anecdote.content)
            }}
          />
        )}
      </ul>
    </div>
  )
}

export default AnecdoteList