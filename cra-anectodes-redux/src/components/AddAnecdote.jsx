import { useDispatch } from 'react-redux'
import { addQuote } from '../reducers/anecdoteReducer'
import { addType } from '../reducers/notificationReducer'
import { setNotification } from '../reducers/notificationReducer'

export const AddAnecdote = () => {

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const quote = e.target.quote.value
    dispatch(addQuote(quote))
    dispatch(addType('add'))
    dispatch(setNotification(`${quote} was added succesfully!`, 5000))
    e.target.quote.value = ''
  }

  return (
    <div className='w-[500px]'>
      <h2>Add new quote: </h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col items-center">
          <input className='h-12 my-3 w-full' type='text' name='quote' id='quote' />
          <button className='btn-text py-5 w-28 mt-5' type='submit'>Submit!</button>
        </div>
      </form>
    </div>
  )
}
