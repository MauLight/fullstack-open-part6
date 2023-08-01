import { useContext } from "react"
import CounterContext from "../context/CounterContext"
import { useCounterValue } from "../context/CounterContext"

export const Header = () => {

    const counter = useCounterValue()

  return (
    <h1 className="text-center text-8xl mb-5">{counter}</h1>
  )
}
