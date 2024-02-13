import Tooltip from './Tooltip';
import './App.css'

function App() {

  return (
    <>
    <div className='App'>
    <h1>Tooltip Example</h1>
      <Tooltip text="This is a tooltip">
        <button>Hover me</button>
      </Tooltip>
    </div>  
    </>
  )
}

export default App
