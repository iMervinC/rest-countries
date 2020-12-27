import NavBar from '../components/NavBar'
import Inputs from '../components/Inputs'
import CountryList from '../components/CountryList'

const HomePage = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Inputs />
      <CountryList />
    </>
  )
}

export default HomePage
