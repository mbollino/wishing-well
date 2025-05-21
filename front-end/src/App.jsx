import './App.css'
import { useState, useEffect } from 'react';
import * as wishletService from './services/wishletService'
import WishingWell from './components/WishingWell/WishingWell';

function App() {

  const [wishlets, setWishlets] = useState([])

  useEffect(() => {
    const fetchWishlets = async () => {
      try {
        const fetchedWishlets = await wishletService.index()
        if (fetchedWishlets.err) {
          throw new Error(fetchedWishlets.err)
        }
        setWishlets(fetchedWishlets)
      } catch (err) {
        console.log(err)
      }
    }
    fetchWishlets()
  }, [])

  return (
    <>
      <WishingWell wishlets={wishlets} />
    </>
  )
}

export default App
