const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/wishlets`;

const deletePet = async (wishletId) => {
    try {
      const res = await fetch(`${BASE_URL}/${wishletId}`, {
        method: 'DELETE',
      });
      return res.json();
    } catch (err) {
      console.log(err);
    }
  };


export {
    delete,
}