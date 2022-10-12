import React, { useEffect, useState } from 'react'
import { Credentials } from './Components/Credentials';
import Dropdown from './Components/Dropdown'
import axios from 'axios'


const App = () => {
  const spotify = Credentials();

const data = [
  {value: 1, name: 'a'},
  {value: 2, name: 'b'},
  {value: 3, name: 'c'},
]

const [token, setToken] = useState(''); 

useEffect(() => {
    axios ('https://accounts.spotify.com/api/token', {
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
  },
  data: 'grant_type=client_credentials',
  method: 'POST'
  }).then(tokenResponse => {
    console.log(tokenResponse.data.access_token);
    setToken(tokenResponse.data.access_token);
  })
}, [])
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