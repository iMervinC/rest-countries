import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import RestState from './context/RestState'

function App() {
  return (
    <RestState>
      <NavBar />
      <HomePage />
    </RestState>
  )
}

export default App
