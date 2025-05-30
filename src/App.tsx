import countryCodeToFlagEmoji from 'country-code-to-flag-emoji'
import './App.css'

function App() {

  return (
    <>
      <div className='text-9xl'>
        {countryCodeToFlagEmoji('en-CA')}
        {countryCodeToFlagEmoji('en-US')}
      </div>
      <h1>Ew! You're NOT from France? Please leave!</h1>
    </>
  )
}

export default App
