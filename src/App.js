import {useState} from 'react'
import Navbar from './Navbar';
import Header from './Header';
import ProductCategory from './ProductCategory';
import Features from './Features'
import Footer from './Footer'
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
