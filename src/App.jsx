import { useEffect, useState} from 'react'

import './App.css'
import SingleFakeData from './compenents/SingleFakeData/SingleFakeData';

function App() {
 const [FakeData, setFakeData] = useState([]);
 



   useEffect(() => {
  fetch('FakeData.json')
  .then (res => res.json())
  .then (data => setFakeData(data))

   }, [])

  return (
    <div>
       <h2 className='first-one'>
      Data Length : {FakeData.length}
      </h2>
      {
        FakeData.map(singleData => <SingleFakeData
        key = {singleData.id}
        singleData = {singleData}
        ></SingleFakeData>)
      }
    </div>
  )
}

export default App
