// import { useContext } from 'react';
// import { Routes, Route } from 'react-router'; 
// import NavBar from './components/NavBar/NavBar';
// import Landing from './components/Landing/Landing';
// import Dashboard from './components/Dashboard/Dashboard';
// import { UserContext } from './contexts/UserContext';
// import SignUpForm from './components/SignUpForm/SignUpForm';
// import SignInForm from './components/SignInForm/SignInForm';
// import { useState, useEffect } from 'react';
// import * as wishletService from './services/wishletService';
// import WishletDetail from './components/WishletDetail/WishletDetail';
// import './App.css';

// const App = () => {
//   const [wishlets, setWishlets] = useState([]);
//   const [selected, setSelected] = useState([null]);
//   const { user } = useContext(UserContext);

//   useEffect(() => {
//     const fetchWishlets = async () => {
//       try {
//         const fetchedWishlets = await wishletService.index();
//         if (fetchedWishlets.err) {
//           throw new Error(fetchedWishlets.err);
//         }
//         setWishlets(fetchedWishlets);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchWishlets();
//   }, []);


// const handleDeleteWishlet = async (wishletId) => {
//   try {
//     const deletedWishlet = await wishletService.delete(wishletId);

//     if (deletedWishlet.err) {
//       throw new Error(deletedWishlet.err);
//     }

//     setWishlets(wishlets.filter((pet) => pet._id !== deletedWishlet._id));
//       setSelected(null);
//       setIsFormOpen(false);
//     } catch (err) {
//       console.log(err);
//   }
// }



//   return (
//     <>
//     <NavBar />
//     <Routes>
//         <Route path='/' element={user ? <Dashboard /> : <Landing /> } />  
//         <Route path='/sign-up' element={<SignUpForm />} />
//         <Route path="/sign-in" element={<SignInForm />} />
//     </Routes>
//     <h1> Hello, friend!</h1>
//     <WishletDetail selected={selected} handleFormView={handleFormView} handleDeleteWishlet={handleDeleteWishlet} />
//     </>
//   )
 
// };
//   //       const fetchedWishlets = await wishletService.index()
//   //       if (fetchedWishlets.err) {
//   //         throw new Error(fetchedWishlets.err)
//   //       }
//   //       setWishlets(fetchedWishlets)
//   //     } catch (err) {
//   //       console.log(err)
//   //     }
//   //   }
//   //   fetchWishlets()
//   // }, [])

//   const handleFormView = (wishlet) => {
//     if (!wishlet._id) setSelected(null)
//     setIsFormOpen(!isFormOpen)
//   }

//   const handleAddWishlet = async (formData) => {
//     try {
//       const newWishlet = await wishletService.create(formData)
//       setWishlets([newWishlet, ...wishlets])
//       setIsFormOpen(false)
//     } catch (error) {
//       console.log(error)      
//     }
//   }

//   const handleUpdateWishlet = async (formData, wishletId) => {
//     try {
//       const updatedWishlet = await wishletService.update(formData, wishletId)
//       if (updatedWishlet.err) {
//         throw new Error(updatedWishlet.err)
//       }
//       const updatedWishingWell = wishlets.map((wishlet) => (
//         wishlet._id !== updatedWishlet._id ? wishlet : updatedWishlet
//       ));
//       setWishlets(updatedWishingWell);
//       setSelected(updatedWishlet);
//       setIsFormOpen(false);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   return (
//     <>
//       <WishingWell wishlets={wishlets} handleSelect={handleSelect} handleFormView={handleFormView} isFormOpen={isFormOpen} />
//       {isFormOpen ? (
//         <WishletForm handleAddWishlet={handleAddWishlet} selected={selected} handleUpdateWishlet={handleUpdateWishlet} />
//       ) : (
//         <WishletDetail selected={selected} handleFormView={handleFormView} />
//       )}
//     </>
//   )
// }

// export default App
