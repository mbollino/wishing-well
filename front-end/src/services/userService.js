const BASE_URL = 'https://your-api-endpoint.com/api/users'; 

const index = async () => {
  try {

    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });

    const data = await res.json();

    if (data.err) {
      throw new Error(data.err);
    }

    return data
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};


export {
  index,
};
