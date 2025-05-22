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

  const handleUpdateWishlet = async (formData, wishletId) => {
    try {
      const updatedWishlet = await wishletService.update(formData, wishletId)
      if (updatedWishlet.err) {
        throw new Error(updatedWishlet.err)
      }
      const updatedWishingWell = wishlets.map((wishlet) => (
        wishlet._id !== updatedWishlet._id ? wishlet : updatedWishlet
      ));
      setWishlets(updatedWishingWell);
      setSelected(updatedWishlet);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <WishingWell wishlets={wishlets} handleSelect={handleSelect} handleFormView={handleFormView} isFormOpen={isFormOpen} />
      {isFormOpen ? (
        <WishletForm handleAddWishlet={handleAddWishlet} selected={selected} handleUpdateWishlet={handleUpdateWishlet} />
      ) : (
        <WishletDetail selected={selected} handleFormView={handleFormView} />
      )}
    </>
  )
}

export default App
