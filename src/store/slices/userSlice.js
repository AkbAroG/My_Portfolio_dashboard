
// // import { createSlice } from "@reduxjs/toolkit";
// // import axios from "axios";

// // const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://my-portfolio-rose-two-59.vercel.app/api/v1";
// // axios.defaults.withCredentials = true;

// // const savedToken = localStorage.getItem("token");
// // if (savedToken) {
// //   axios.defaults.headers.common["Authorization"] = `Bearer ${savedToken}`;
// // }

// // const userSlice = createSlice({
// //   name: "user",
// //   initialState: {
// //     loading: false,
// //     user: {},
// //     isAuthenticated: false,
// //     error: null,
// //     message: null,
// //     isUpdated: false,
// //   },
// //   reducers: {
// //     loginRequest: (state) => {
// //       state.loading = true;
// //       state.isAuthenticated = false;
// //       state.user = {};
// //       state.error = null;
// //     },
// //     loginSuccess: (state, action) => {
// //       state.loading = false;
// //       state.isAuthenticated = true;
// //       state.user = action.payload;
// //       state.error = null;
// //     },
// //     loginFailed: (state, action) => {
// //       state.loading = false;
// //       state.isAuthenticated = false;
// //       state.user = {};
// //       state.error = action.payload;
// //     },
// //     registerRequest: (state) => {
// //       state.loading = true;
// //       state.isAuthenticated = false;
// //       state.user = {};
// //       state.error = null;
// //     },
// //     registerSuccess: (state, action) => {
// //       state.loading = false;
// //       state.isAuthenticated = true;
// //       state.user = action.payload;
// //       state.error = null;
// //     },
// //     registerFailed: (state, action) => {
// //       state.loading = false;
// //       state.isAuthenticated = false;
// //       state.user = {};
// //       state.error = action.payload;
// //     },
// //     logoutSuccess: (state, action) => {
// //       state.loading = false;
// //       state.isAuthenticated = false;
// //       state.user = {};
// //       state.error = null;
// //       state.message = action.payload;
// //     },
// //     logoutFailed: (state, action) => {
// //       state.loading = false;
// //       state.error = action.payload;
// //     },
// //     loadUserRequest: (state) => {
// //       state.loading = true;
// //       state.isAuthenticated = false;
// //       state.user = {};
// //       state.error = null;
// //     },
// //     loadUserSuccess: (state, action) => {
// //       state.loading = false;
// //       state.isAuthenticated = true;
// //       state.user = action.payload;
// //       state.error = null;
// //     },
// //     loadUserFailed: (state, action) => {
// //       state.loading = false;
// //       state.isAuthenticated = false;
// //       state.user = {};
// //       state.error = action.payload;
// //     },
// //     updatePasswordRequest: (state) => {
// //       state.loading = true;
// //       state.isUpdated = false;
// //       state.message = null;
// //       state.error = null;
// //     },
// //     updatePasswordSuccess: (state, action) => {
// //       state.loading = false;
// //       state.isUpdated = true;
// //       state.message = action.payload;
// //       state.error = null;
// //     },
// //     updatePasswordFailed: (state, action) => {
// //       state.loading = false;
// //       state.isUpdated = false;
// //       state.message = null;
// //       state.error = action.payload;
// //     },
// //     updateProfileRequest: (state) => {
// //       state.loading = true;
// //       state.isUpdated = false;
// //       state.message = null;
// //       state.error = null;
// //     },
// //     updateProfileSuccess: (state, action) => {
// //       state.loading = false;
// //       state.isUpdated = true;
// //       state.message = action.payload;
// //       state.error = null;
// //     },
// //     updateProfileFailed: (state, action) => {
// //       state.loading = false;
// //       state.isUpdated = false;
// //       state.message = null;
// //       state.error = action.payload;
// //     },
// //     updateProfileResetAfterUpdate: (state) => {
// //       state.error = null;
// //       state.isUpdated = false;
// //       state.message = null;
// //     },
// //     clearAllErrors: (state) => {
// //       state.error = null;
// //     },
// //   },
// // });

// // export const login = (email, password) => async (dispatch) => {
// //   dispatch(userSlice.actions.loginRequest());
// //   try {
// //     console.log("Login attempt with:", { email, url: `${API_BASE}/login` });
// //     const { data } = await axios.post(
// //       `${API_BASE}/login`,
// //       { email, password },
// //       {
// //         withCredentials: true,
// //         headers: { "Content-Type": "application/json" },
// //       }
// //     );
// //     console.log("Login success:", data);

// //     if (data.token) {
// //       localStorage.setItem("token", data.token);
// //       axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
// //     }

// //     dispatch(userSlice.actions.loginSuccess(data.user));
// //     dispatch(userSlice.actions.clearAllErrors());
// //   } catch (error) {
// //     console.log("Login error:", error.response?.status, error.response?.data);
// //     const message =
// //       error?.response?.data?.message || error?.message || "Login failed";
// //     dispatch(userSlice.actions.loginFailed(message));
// //   }
// // };

// // export const register = (formData) => async (dispatch) => {
// //   dispatch(userSlice.actions.registerRequest());
// //   try {
// //     const { data } = await axios.post(`${API_BASE}/register`, formData, {
// //       withCredentials: true,
// //       headers: { "Content-Type": "multipart/form-data" },
// //     });

// //     if (data.token) {
// //       localStorage.setItem("token", data.token);
// //       axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
// //     }

// //     dispatch(userSlice.actions.registerSuccess(data.user));
// //     dispatch(userSlice.actions.clearAllErrors());
// //   } catch (error) {
// //     const message =
// //       error?.response?.data?.message || error?.message || "Registration failed";
// //     dispatch(userSlice.actions.registerFailed(message));
// //   }
// // };

// // export const getUser = () => async (dispatch) => {
// //   dispatch(userSlice.actions.loadUserRequest());
// //   try {
// //     const { data } = await axios.get(`${API_BASE}/user/me`);
// //     dispatch(userSlice.actions.loadUserSuccess(data.user));
// //     dispatch(userSlice.actions.clearAllErrors());
// //   } catch (error) {
// //     dispatch(userSlice.actions.loadUserFailed(error.response?.data?.message || error.message));
// //   }
// // };

// // export const logout = () => async (dispatch) => {
// //   try {
// //     const { data } = await axios.get(`${API_BASE}/logout`);

// //     // Remove bearer token from axios defaults when logging out
// //     delete axios.defaults.headers.common["Authorization"];
// //     localStorage.removeItem("token");

// //     dispatch(userSlice.actions.logoutSuccess(data.message));
// //     dispatch(userSlice.actions.clearAllErrors());
// //   } catch (error) {
// //     // Even if logout API fails, clear local state to log out user
// //     delete axios.defaults.headers.common["Authorization"];
// //     dispatch(userSlice.actions.logoutSuccess("Logged out successfully"));
// //     dispatch(userSlice.actions.clearAllErrors());
// //   }
// // };

// // export const updatePassword =
// //   (currentPassword, newPassword, confirmNewPassword) => async (dispatch) => {
// //     dispatch(userSlice.actions.updatePasswordRequest());
// //     try {
// //       const { data } = await axios.put(
// //         `${API_BASE}/user/password/update`,
// //         { currentPassword, newPassword, confirmNewPassword },
// //         { withCredentials: true, headers: { "Content-Type": "application/json" } }
// //       );
// //       dispatch(userSlice.actions.updatePasswordSuccess(data.message));
// //       dispatch(userSlice.actions.clearAllErrors());
// //     } catch (error) {
// //       dispatch(userSlice.actions.updatePasswordFailed(error.response?.data?.message || error.message));
// //     }
// //   };

// // export const updateProfile = (formData) => async (dispatch) => {
// //   dispatch(userSlice.actions.updateProfileRequest());
// //   try {
// //     const { data } = await axios.put(
// //       `${API_BASE}/user/me/profile/update`,
// //       formData,
// //       { headers: { "Content-Type": "multipart/form-data" } }
// //     );
// //     dispatch(userSlice.actions.updateProfileSuccess(data.message));
// //     dispatch(userSlice.actions.clearAllErrors());
// //   } catch (error) {
// //     dispatch(userSlice.actions.updateProfileFailed(error.response?.data?.message || error.message));
// //   }
// // };

// // export const resetProfile = () => (dispatch) => {
// //   dispatch(userSlice.actions.updateProfileResetAfterUpdate());
// // };

// // export const clearAllUserErrors = () => (dispatch) => {
// //   dispatch(userSlice.actions.clearAllErrors());
// // };

// // export default userSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const API_BASE =
//   import.meta.env.VITE_API_BASE_URL ||
//   "https://my-portfolio-rose-two-59.vercel.app/api/v1";

// axios.defaults.withCredentials = true;

// // Attach token if exists
// const savedToken = localStorage.getItem("token");
// if (savedToken) {
//   axios.defaults.headers.common["Authorization"] = `Bearer ${savedToken}`;
// }

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     loading: false,
//     user: {},
//     isAuthenticated: false,
//     error: null,
//     message: null,
//     isUpdated: false,
//   },
//   reducers: {
//     loginRequest: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     loginSuccess: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload;
//     },
//     loginFailed: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.error = action.payload;
//     },

//     registerRequest: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     registerSuccess: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload;
//     },
//     registerFailed: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     logoutSuccess: (state) => {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.user = {};
//     },

//     loadUserSuccess: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload;
//     },
//     loadUserFailed: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.error = action.payload;
//     },

//     updatePasswordSuccess: (state, action) => {
//       state.loading = false;
//       state.isUpdated = true;
//       state.message = action.payload;
//     },
//     updatePasswordFailed: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     updateProfileSuccess: (state, action) => {
//       state.loading = false;
//       state.isUpdated = true;
//       state.message = action.payload;
//     },
//     updateProfileFailed: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     clearAllErrors: (state) => {
//       state.error = null;
//     },
//   },
// });

// // 🔥 LOGIN
// export const login = (email, password) => async (dispatch) => {
//   dispatch(userSlice.actions.loginRequest());
//   try {
//     const { data } = await axios.post(
//       `${API_BASE}/user/login`,
//       { email, password },
//       {
//         withCredentials: true,
//         headers: { "Content-Type": "application/json" },
//       }
//     );

//     if (data.token) {
//       localStorage.setItem("token", data.token);
//       axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
//     }

//     dispatch(userSlice.actions.loginSuccess(data.user));
//   } catch (error) {
//     dispatch(
//       userSlice.actions.loginFailed(
//         error.response?.data?.message || error.message
//       )
//     );
//   }
// };

// // 🔥 REGISTER
// export const register = (formData) => async (dispatch) => {
//   dispatch(userSlice.actions.registerRequest());
//   try {
//     const { data } = await axios.post(
//       `${API_BASE}/user/register`,
//       formData,
//       {
//         headers: { "Content-Type": "multipart/form-data" },
//       }
//     );

//     dispatch(userSlice.actions.registerSuccess(data.user));
//   } catch (error) {
//     dispatch(
//       userSlice.actions.registerFailed(
//         error.response?.data?.message || error.message
//       )
//     );
//   }
// };

// // 🔥 GET USER
// export const getUser = () => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`${API_BASE}/user/me`);
//     dispatch(userSlice.actions.loadUserSuccess(data.user));
//   } catch (error) {
//     dispatch(
//       userSlice.actions.loadUserFailed(
//         error.response?.data?.message || error.message
//       )
//     );
//   }
// };

// // 🔥 LOGOUT
// export const logout = () => async (dispatch) => {
//   try {
//     await axios.get(`${API_BASE}/user/logout`);

//     localStorage.removeItem("token");
//     delete axios.defaults.headers.common["Authorization"];

//     dispatch(userSlice.actions.logoutSuccess());
//   } catch (error) {
//     localStorage.removeItem("token");
//     delete axios.defaults.headers.common["Authorization"];
//     dispatch(userSlice.actions.logoutSuccess());
//   }
// };

// // 🔥 UPDATE PASSWORD
// export const updatePassword =
//   (currentPassword, newPassword, confirmNewPassword) => async (dispatch) => {
//     try {
//       const { data } = await axios.put(
//         `${API_BASE}/user/password/update`,
//         { currentPassword, newPassword, confirmNewPassword }
//       );

//       dispatch(userSlice.actions.updatePasswordSuccess(data.message));
//     } catch (error) {
//       dispatch(
//         userSlice.actions.updatePasswordFailed(
//           error.response?.data?.message || error.message
//         )
//       );
//     }
//   };

// // 🔥 UPDATE PROFILE
// export const updateProfile = (formData) => async (dispatch) => {
//   try {
//     const { data } = await axios.put(
//       `${API_BASE}/user/me/profile/update`,
//       formData
//     );

//     dispatch(userSlice.actions.updateProfileSuccess(data.message));
//   } catch (error) {
//     dispatch(
//       userSlice.actions.updateProfileFailed(
//         error.response?.data?.message || error.message
//       )
//     );
//   }
// };

// export const clearAllUserErrors = () => (dispatch) => {
//   dispatch(userSlice.actions.clearAllErrors());
// };

// export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE =
  import.meta.env.VITE_API_BASE_URL ||
  "https://my-portfolio-rose-two-59.vercel.app";

axios.defaults.withCredentials = true;

// 🔥 SAFE ERROR HANDLER (recommended)
const getError = (error) =>
  error.response?.data?.message || error.message || "Something went wrong";

// Attach token if exists
const savedToken = localStorage.getItem("token");
if (savedToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${savedToken}`;
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: {},
    isAuthenticated: false,
    error: null,
    message: null,
    isUpdated: false,
  },
  reducers: {
    loginRequest(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    registerRequest(state) {
      state.loading = true;
      state.error = null;
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    registerFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    logoutSuccess(state) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = {};
    },

    loadUserSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loadUserFailed(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    updatePasswordSuccess(state, action) {
      state.loading = false;
      state.isUpdated = true;
      state.message = action.payload;
    },
    updatePasswordFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    updateProfileSuccess(state, action) {
      state.loading = false;
      state.isUpdated = true;
      state.message = action.payload;
    },
    updateProfileFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    clearAllErrors(state) {
      state.error = null;
    },
  },
});

// 🔥 LOGIN
export const login = (email, password) => async (dispatch) => {
  dispatch(userSlice.actions.loginRequest());

  try {
    const { data } = await axios.post(
      `${API_BASE}/user/login`,
      { email, password }
    );

    if (data.token) {
      localStorage.setItem("token", data.token);
      axios.defaults.headers.common["Authorization"] =
        `Bearer ${data.token}`;
    }

    dispatch(userSlice.actions.loginSuccess(data.user));
  } catch (error) {
    dispatch(
      userSlice.actions.loginFailed(getError(error))
    );
  }
};

// 🔥 REGISTER
export const register = (formData) => async (dispatch) => {
  dispatch(userSlice.actions.registerRequest());

  try {
    const { data } = await axios.post(
      `${API_BASE}/user/register`,
      formData
    );

    dispatch(userSlice.actions.registerSuccess(data.user));
  } catch (error) {
    dispatch(
      userSlice.actions.registerFailed(getError(error))
    );
  }
};

// 🔥 GET USER
export const getUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_BASE}/user/me`);
    dispatch(userSlice.actions.loadUserSuccess(data.user));
  } catch (error) {
    dispatch(
      userSlice.actions.loadUserFailed(getError(error))
    );
  }
};

// 🔥 LOGOUT
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`${API_BASE}/user/logout`);
  } finally {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    dispatch(userSlice.actions.logoutSuccess());
  }
};

// 🔥 UPDATE PASSWORD
export const updatePassword =
  (currentPassword, newPassword, confirmNewPassword) =>
  async (dispatch) => {
    try {
      const { data } = await axios.put(
        `${API_BASE}/user/password/update`,
        { currentPassword, newPassword, confirmNewPassword }
      );

      dispatch(
        userSlice.actions.updatePasswordSuccess(data.message)
      );
    } catch (error) {
      dispatch(
        userSlice.actions.updatePasswordFailed(getError(error))
      );
    }
  };

// 🔥 UPDATE PROFILE
export const updateProfile = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `${API_BASE}/user/me/profile/update`,
      formData
    );

    dispatch(
      userSlice.actions.updateProfileSuccess(data.message)
    );
  } catch (error) {
    dispatch(
      userSlice.actions.updateProfileFailed(getError(error))
    );
  }
};

export const clearAllUserErrors = () => (dispatch) => {
  dispatch(userSlice.actions.clearAllErrors());
};

export default userSlice.reducer;