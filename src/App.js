import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { useStateValue } from './StateProvider';
import { useEffect } from 'react'
import { auth } from './firebase'

function App() {
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //the user is logged in

        dispatch({
          type: 'SET_USER',
          payload: authUser
        })
      } else {
        //the user is logged out

        dispatch({
          type: 'SET_USER',
          payload: null
        })
      }
    })

    return () => {
      //any cleanup operations go here
      unsubscribe()
    }

  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
