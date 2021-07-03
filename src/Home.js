import {useState} from 'react'
import Header from './components/Header';
import ProductCategory from './components/ProductCategory';
import Features from './components/Features'
import Footer from './components/Footer'
import 'fontsource-roboto';

function Home () {
  return (
    <div>
      <Header />
      <ProductCategory />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;
