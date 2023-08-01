import { createContext, useContext, useReducer } from "react"
import { counterReducer } from "../reducers/counterReducer"

const CounterContext = createContext()

export const useCounterValue = () => {
    const counterAndDispatch = useContext(CounterContext)
    return counterAndDispatch[0]
  }
  
  export const useCounterDispatch = () => {
    const counterAndDispatch = useContext(CounterContext)
    return counterAndDispatch[1]
  }

export const CounterContextProvider = (props) => {
  const [counter, counterDispatch] = useReducer(counterReducer, 0)

  return (
    <CounterContext.Provider value={[counter, counterDispatch] }>
      {props.children}
    </CounterContext.Provider>
  )
}

export default CounterContext