import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addFilter, updateFilterList } from '../reducers/filterReducer'
import { setNotification } from '../reducers/notificationReducer'
import { addLikeQuote } from '../reducers/anecdoteReducer'

import { Button } from './Button'
import Filter from './Filter'

export const Anecdotes = () => {

  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter.filter)

  const filteredlist = useSelector(state => state.filter.filteredlist)
  const sortedList = [...anecdotes].sort((a, b) => a.likes < b.likes ? 1 : -1)
  const filterQuotes = sortedList?.filter((elem) => elem.quote.toLowerCase().includes(filter))

  const handleFilter = (e) => {

    e.preventDefault()
    const filteredValue = e.target.filter.value
    dispatch(addFilter(filteredValue))
    e.target.filter.value = ''
  }

  const handleBack = (e) => {
    e.preventDefault()
    dispatch(updateFilterList(sortedList))
  }

  const handleLike = (id) => {
    const chosenQuote = anecdotes.filter(elem => elem.id === id)[0]
    dispatch(addLikeQuote(chosenQuote))
    dispatch(setNotification(`You just liked ${chosenQuote.quote}!`, 5000))
  }

  useEffect(() => {

    dispatch(updateFilterList(filterQuotes))

  }, [filter])

  useEffect(() => {

    dispatch(updateFilterList(sortedList))

  }, [anecdotes])

  return (
    <div className='flex flex-col px-5'>
      <Filter handleSubmit={handleFilter} handleBack={handleBack} />
      <ul>
        {
          filteredlist && filteredlist.map(elem => (
            <li id={elem.id} key={elem.id}>
              <div className="flex h-[80px] items-center">
                <p className='text-sm'>
                  {`${elem.quote}`}
                </p>
                <p className='feed-text w-[120px] text-2xl mr-2 hover:text-neutral-900 transition-all duration-150 ease-in-out'>
                  {`${elem.likes} ${elem.likes > 1 || elem.likes === 0 ? 'likes' : 'like'}`}
                </p>
                <Button text={'Like'} handler={() => handleLike(elem.id)} />
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
