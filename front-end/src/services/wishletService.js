const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/wishlets`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

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
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { index, create, update, deleteWishlet };
