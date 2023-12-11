import axios from "axios";

const baseURL = "https://personal-budget-api.onrender.com";
//store signup token in local storage
const signup = (username, password) => {
    return axios.post(baseURL, "/api/signup", {username, password})
    .then((res) => {
        if (res.data.accessToken) {
            localStorage.setItem('jwt', JSON.stringify(res.data));
        }
        return res.data;
    })
    .catch(err => console.log(err));
};

//store login tokens in local storage
const login = (username, password) => {
    return axios.post(baseURL, "/api/login", {username, password})
    .then((res) => {
        if (res.data.accessToken) {
            localStorage.setItem('jwt', JSON.stringify(res.data));
        }
        return res.data;
    })
    .catch(err => console.log(err));
};

const logout = () => {
    localStorage.removeItem('jwt');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('jwt'));
};

const getRefreshToken = () => {
    try {
      const jwtData = JSON.parse(localStorage.getItem('jwt'));
  
      if (jwtData && jwtData.refreshToken) {
        return jwtData.refreshToken;
      }
  
      return null; // Return null or handle the case when refresh token is not available
    } catch (error) {
      console.error('Error parsing refresh token:', error);
      return null;
    }
};

const updateAccessToken = (newAccessToken) => {
    const storedTokens = JSON.parse(localStorage.getItem('jwt')) || {};
  
    storedTokens.accessToken = newAccessToken;
    localStorage.setItem('jwt', JSON.stringify(storedTokens));
};

const expireWarning = () => {
    // Assuming you have stored the refresh token somewhere
    const refreshToken = getRefreshToken();
  
    return axios.post(baseURL, "/token", { token: refreshToken })
      .then((res) => {
        if (res.data.accessToken) {
          const alertTime = 60 - 10; // 1 minute token and 10 seconds left
          setTimeout(() => {
            const refresh = window.confirm('Your session will expire in 10 seconds. Do you want to refresh your session?');
            if (refresh) {
              // Send a request to the backend to refresh the token
              axios.post(baseURL, "/token", { token: refreshToken })
                .then((refreshRes) => {
                  if (refreshRes.data.accessToken) {
                    // Update the stored access token with the new one
                    updateAccessToken(refreshRes.data.accessToken); // Replace this with your actual way of updating the access token
                  }
                })
                .catch((refreshErr) => {
                  console.log("Error refreshing token:", refreshErr);
                  // Handle the error as needed
                });
            } else {
                logout();
            }
          }, alertTime * 1000);
        }
        return res.data;
      })
      .catch(err => console.log(err));
  };


const authService = {
    signup,
    login,
    logout,
    getCurrentUser,
    expireWarning
};

export default authService;