import countryCodeToFlagEmoji from 'country-code-to-flag-emoji'
import './App.css'

function App() {

  return (
    <>
      <div className='text-9xl'>
        {countryCodeToFlagEmoji('fr')}
      </div>
      <h1>OMG! You're from France? That is so cool!</h1>
    </>
  )
}

export default App
