import { Button } from "./components/Button"
import { Header } from "./components/Header"

function App() {

  return (
    <div className="App">
      <div className="flex flex-col justify-center items-center">
        <Header />
        <div>
          <Button type={'INC'} label={'+'} />
          <Button type={'DEC'} label={'-'} />
          <Button type={'ZERO'} label={'0'} />
        </div>
      </div>
    </div>
  )
}

export default App
