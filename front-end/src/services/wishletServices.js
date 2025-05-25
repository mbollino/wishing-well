const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/wishlets`;

const index = async () => {
  try {
    const res = await fetch(`${BASE_URL}`);

    const data = await res.json();

    if (data.err) {
      throw new Error(data.err);
    }
    return data;
  } catch (err) {
    console.error(err);
  }
};

const create = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const update = async (formData, wishletId) => {
  try {
    const res = await fetch(`${BASE_URL}/${wishletId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteWishlet = async (wishletId) => {
  try {
    const res = await fetch(`${BASE_URL}/${wishletId}`, {
      method: "DELETE",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { index, create, update, deleteWishlet };