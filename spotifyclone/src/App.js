import React from 'react'
import Dropdown from './Components/Dropdown'

const data = [
  {value: 1, name: 'a'},
  {value: 2, name: 'b'},
  {value: 3, name: 'c'},
]


const App = () => {
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <form onSubmit={() => {}}>
        <div className='container'>
          <Dropdown options={data}/>
          <Dropdown options={data}/>
          <button type='submit'>
            Search
          </button>
        </div>
      </form>
      
    </div>
  )
}

export default App