//react router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';

//Pages
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'

function App() {
  const { authIsReady, user } = useAuthContext()
  if (!authIsReady) {
    return (
      <>
        <h2>Please wait.</h2>
      </>
    )
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {user && <Home />}
            {!user && <Redirect to='/login' />}
          </Route>
          <Route exact path="/login">
            {!user && <Login />}
            {user && <Redirect to='/' />}
          </Route>
          <Route exact path="/signup">
            {!user && <Signup />}
            {user && <Redirect to='/' />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
