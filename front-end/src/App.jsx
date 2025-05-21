import { Routes, Route } from 'react-router'; 
import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import { useState, useEffect } from 'react';
import * as wishletService from './services/wishletService';
import WishletDetail from './components/WishletDetail/WishletDetail';
import './App.css';

const App = () => {
  const [wishlets, setWishlets] = useState ([]);
  const [selected, setSelected] = useState ([null]);


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
  }, []);

  // const handleSelect = (wishlet) => {
  //   setSelected(wishlet);
  // }


  // const handleFormView = (wishlet) => {
  //   if (!wishlet._id) setSelected(null)
  //   setIsFormOpen(!isFormOpen)
  // }



  return (
    <>
    <NavBar />
    <Routes>
        <Route path='/sign-up' element={<SignUpForm />} />
    </Routes>
    <h1> Hello, friend!</h1>
    <WishletDetail selected = {selected} />
    </>
  )

};

export default App
