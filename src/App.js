import {useState} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Home'
import AllProduct from './components/AllProduct'
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
	  <Route path="/product" component={AllProduct} />
	</Switch>
      </MyContext.Provider>
     </BrowserRouter>
    </div>
  );
}

export default App;
