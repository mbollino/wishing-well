import './App.css'
import { useState, useEffect } from 'react';
import * as wishletService from './services/wishletService'
import WishletsWell from './components/WishletsWell/WishletsWell';

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
      <WishletsWell wishlets={wishlets} />
    </>
  )
}

export default App
