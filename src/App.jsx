
import './App.css';

import Navbar from './components/navbar';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import BrandSupport from './components/BrandSupport';
import Products from './components/Products';
import Support from './components/Support';
import Explore from './components/Explore';
import ScrollingBanner from './components/scrollingBanner';
import BestSelling from './components/BestSelling';
import Catalog from './components/Catalog';

function App() {

  return (
    <main>
      <Navbar/>
      <SearchBar/>
      <Header/>
      <BrandSupport/>
      <Products/>
      <Support/>
      <Explore/>
      <ScrollingBanner/>
      <BestSelling/>
      <Catalog/>

      
    </main>
  )
}

export default App
