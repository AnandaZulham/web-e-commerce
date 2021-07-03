import {useState} from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProductCategory from './components/ProductCategory';
import Features from './components/Features'
import Footer from './components/Footer'
import 'fontsource-roboto';
import {MyContext} from './context/MyContext';

function App() {
  const [state, setState] = useState(0)
  return (
    <div>
	 <MyContext.Provider value={{state, setState}}>
      <Navbar />
      <Header />
      <ProductCategory />
      <Features />
      <Footer />
     </MyContext.Provider>
    </div>
  );
}

export default App;
