import {useState} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Home'
import {MyContext} from './context/MyContext'

function App() {
  const [state, setState] = useState(0)
  return (
    <div>
     <BrowserRouter>
      <MyContext.Provider value={{state, setState}}>
	<Navbar />

	<Switch>
	  <Route exact path="/" component={Home} />
	</Switch>
      </MyContext.Provider>
     </BrowserRouter>
    </div>
  );
}

export default App;
