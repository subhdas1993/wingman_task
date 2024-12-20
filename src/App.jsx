
import './App.css'
import MainSection from './user components/MainSection'
import NavBar from './user components/NavBar'

function App() {

  return (
    <>
      <div className='box-border h-svh block lg:flex lg:justify-between lg:overflow-hidden'>
        <NavBar/>
        <MainSection/>
      </div>
    </>
  )
}

export default App
