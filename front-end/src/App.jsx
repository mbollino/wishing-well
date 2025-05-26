import { useState, useEffect, useContext } from 'react';

import { Routes, Route } from 'react-router
import WishletDetail from './components/WishletDetail/WishletDetail';
import WishletForm from './components/WishletForm/WishletForm';
import * as wishletService from './services/wishletServices';
import WishingWell from './components/WishingWell/WishingWell';
import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import { UserContext } from './contexts/UserContext'

import './App.css';


function App() {
  const { user } = useContext(UserContext)
  const [wishlets, setWishlets] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    const fetchWishlets = async () => {
      try {
        const fetchedWishlets = await wishletService.index();
        if (fetchedWishlets.err) {
          throw new Error(fetchedWishlets.err);
        }
        setWishlets(fetchedWishlets);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWishlets();
  }, [user]);

  const handleSelect = (wishlet) => {
    setSelected(wishlet)
    setIsFormOpen(false)
  }

  const handleFormView = (wishlet) => {
    if (!wishlet._id) setSelected(null)
    setIsFormOpen(!isFormOpen)
  }

  const handleCloseDetail = () => {
    setSelected(null)
  }

  const handleAddWishlet = async (formData) => {
    try {
      const newWishlet = await wishletService.create(formData)

      setWishlets(prev => [newWishlet, ...prev])

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

  const handleDeleteWishlet = async (wishletId) => {
    try {
      const deletedWishlet = await wishletService.deleteWishlet(wishletId);

      if (deletedWishlet.err) {
        throw new Error(deletedWishlet.err);
      }

      setWishlets(wishlets.filter((wishlet) => wishlet._id !== deletedWishlet._id));
      setSelected(null);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSaveReflection = async (reflectionData) => {
    if (!selected) return;

    try {
      const updatedWishlet = await wishletService.update({
        ...selected,
        wishletIsCompleted: true,
        reflection: {
          notes: reflectionData.notes,
          completedDate: reflectionData.completedDate,
        },
      }, selected._id);

      if (updatedWishlet.err) throw new Error(updatedWishlet.err);

      setWishlets(wishlets.map(w =>
        w._id === updatedWishlet._id ? updatedWishlet : w
      ));
      setSelected(updatedWishlet);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={
          <WishingWell
            wishlets={wishlets}
            handleSelect={handleSelect}
            handleFormView={handleFormView}
            isFormOpen={isFormOpen}
          />
        }
        />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
      </Routes>
      {isFormOpen ? (
        <WishletForm
          handleAddWishlet={handleAddWishlet}
          selected={selected}
          handleUpdateWishlet={handleUpdateWishlet}
        />
      ) : (
        <WishletDetail
          selected={selected}
          handleFormView={handleFormView}
          handleDeleteWishlet={handleDeleteWishlet}
          handleCloseDetail={handleCloseDetail}
          handleSaveReflection={handleSaveReflection}
        />
      )}
    </>
  )
}

export default App