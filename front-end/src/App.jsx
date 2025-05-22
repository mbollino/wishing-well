import './App.css'
import { useState, useEffect } from 'react';
import * as wishletService from './services/wishletService'
import WishingWell from './components/WishingWell/WishingWell';
import WishletForm from './components/WishletForm/WishletForm';

function App() {

  const [wishlets, setWishlets] = useState([])
  const [isFormOpen, setIsFormOpen] = useState(false)

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

  const handleFormView = (wishlet) => {
    if (!wishlet._id) setSelected(null)
    setIsFormOpen(!isFormOpen)
  }

  const handleAddWishlet = async (formData) => {
    try {
      const newWishlet = await wishletService.create(formData)
      setWishlets([newWishlet, ...wishlets])
      setIsFormOpen(false)
    } catch (error) {
      console.log(error)      
    }
  }

  return (
    <>
      <WishingWell wishlets={wishlets} handleSelect={handleSelect} handleFormView={handleFormView} isFormOpen={isFormOpen}/>
      {isFormOpen ? (
        <WishletForm handleAddWishlet={handleAddWishlet} selected={selected} />
      ) : (
        <WishletDetail selected={selected} handleFormView={handleFormView} />
      )}
    </>
  )
}

export default App
