import HomePage from './pages/HomePage'
import Details from './pages/Details'
import NavBar from './components/NavBar'
import RestState from './context/RestState'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <RestState>
        <NavBar />
        <Switch>
          <Route path="/country/:name" component={Details} exact />
          <Route path="/" component={HomePage} exact />
        </Switch>
      </RestState>
    </Router>
  )
}

export default App
