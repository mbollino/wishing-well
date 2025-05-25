const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/auth`;

const signUp = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/sign-up`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
      credentials: 'include',
    });

    if (res.status === 204 || res.headers.get('Content-Length') === '0') {
      throw new Error('No response body from server');
    }

    const data = await res.json();

    if (data.err) {
      throw new Error(data.err);
    }

    if (data.token) {
      localStorage.setItem('token', data.token);
      // console.log(JSON.parse(atob(data.token.split('.')[1])).payload)
      return JSON.parse(atob(data.token.split('.')[1])).payload;
    }

    throw new Error('Invalid response from server');
  } catch (err) {
    console.log(err);
    throw new Error(err.message || 'An error occurred');
  }
};


const signIn = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/sign-in`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.err) {
      throw new Error(data.err);
    }

    if (data.token) {
      localStorage.setItem('token', data.token);
      return JSON.parse(atob(data.token.split('.')[1])).payload;
    }

    throw new Error('Invalid response from server');
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export {
  signUp,
  signIn,
};
