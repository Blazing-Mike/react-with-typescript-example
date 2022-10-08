import { useState } from 'react'
import './App.css';
import AddToList from './components/AddTo';
import List from './components/List';

export interface Istate{
  people:{
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}

function App() {
  const [people, setPeople] = useState<Istate['people']>([
    {
      name: 'Lebron James',
      url: 'vite.svg',
      age: 35,
      note: 'Best player in the world'

    }
  ])


  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List  people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
      
    </div>
  )
}

export default App
