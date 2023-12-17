import './App.css'
import { Clock } from './components/Clock'
import ChronoInt from './components/ChronoIntissar'
import ChronoF from './components/ChronoFatima'
import ChronoY from './components/ChronoYoussef'
import { useState } from 'react'

const INTISSAR = 'intissar';
const FATIMA = 'fatima';
const YOUSSEF = 'youssef';

const etudiants = [INTISSAR, FATIMA, YOUSSEF];

function App() {
  const [etudiant, setEtudiant] = useState('');

  const handleChange = e => {
    console.log(e.target.value);
    setEtudiant(e.target.value);
  }
  let chrono = null;
  switch (etudiant) {
    case INTISSAR:
      chrono = <ChronoInt />
      break;
    case FATIMA:
      chrono = <ChronoF />
      break;
    case YOUSSEF:
      chrono = <ChronoY />
      break;
  }

  return (
    <>
      <select onChange={handleChange}>
        <option></option>
        {etudiants.map(e => <option key={e}>{e}</option>)}
      </select>
      {/* <Clock /> */}
      {etudiant && <section>
        <h1>{etudiant}</h1>
        {chrono}
      </section>}

    </>
  )
}

export default App
