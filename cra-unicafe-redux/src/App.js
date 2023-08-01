import { Button } from './components/Button'
import { Statistic } from './components/Statistic'
import { useSelector, useDispatch } from 'react-redux'
import {
  handleGood,
  handleBad,
  handleNeutral,
  handleTotal,
  handleAverage,
  handlePositive
} from './reducers/helperFunctions'
import { useEffect } from 'react'

const AppRedux = () => {

  const dispatch = useDispatch()
  const counter = useSelector(state => state)

  console.log(counter)

  const { good, bad, neutral, total, average, positive } = counter

  useEffect(() => {
    dispatch(handleTotal())
    dispatch(handleAverage())
    dispatch(handlePositive())
  }, [good, bad, neutral])

  return (
    <div>
      <h1 className="feed-text">Give Feedback!</h1>
      <div className="container">
        <Button text='Good' handler={() => dispatch(handleGood())} />
        <Button text='Neutral' handler={() => dispatch(handleBad())} />
        <Button text='Bad' handler={() => dispatch(handleNeutral())} />
      </div>
      <h2 className="feed-text">Statistics</h2>
      <div className="container">

        <table>
          <tbody>
            <Statistic text={'Good'} counter={good} />
            <Statistic text={'Neutral'} counter={neutral} />
            <Statistic text={'Bad'} counter={bad} />
            <Statistic text={'Total'} counter={total} />
            <Statistic text={'Average'} counter={average} />
            <Statistic text={'Positive'} counter={positive + '%'} />
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default AppRedux