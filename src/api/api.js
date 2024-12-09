import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adding token to the headers
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage (or sessionStorage/cookie)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // Handle error
  }
);

// Handling responses and cleaning localStorage on 401
apiClient.interceptors.response.use(
  (response) => {
    return response; // Return the response if no error
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear(); // Clear localStorage
      // Optionally, redirect to the login page or perform other actions
      window.location.href = '/admin/auth/signin'; // Redirect to login page (adjust as needed)
    }
    return Promise.reject(error); // Propagate error
  }
);

export default apiClient;
