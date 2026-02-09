


// export const verifyMobile = createAsyncThunk(
//   "auth/verifyMobile",
//   async (firebaseIdToken, thunkAPI) => {
//     try {
//       const res = await apiClient.post(
//         "/auth/verify-mobile",
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${firebaseIdToken}`,
//           },
//           withCredentials: true,
//         }
//       );

//       return res.data.user;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response?.data || null);
//     }
//   }
// );




// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,   // ✅ object or null
//     isLoading: false,
//     error: null,
//   },

//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       //login
//       .addCase(login.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.user = action.payload.user;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })

//       // ✅ getMe
//       .addCase(getMe.fulfilled, (state, action) => {
//         state.user = action.payload;
//       })

//       //logout
//       .addCase(logout.fulfilled, (state) => {
//         state.user = null;
//       })


//       .addCase(verifyMobile.fulfilled, (state, action) => {
//         state.user = action.payload;
//       })


//       .addCase(verifyOtp.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(verifyOtp.fulfilled, (state, action) => {
//         state.loading = false;
//         // Update user state with the data returned from backend
//         state.user = action.payload.user; 
//       })
//       .addCase(verifyOtp.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });


//   },
// });

// export default authSlice.reducer;








import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiClient from "@/lib/apiClient";
import publicApi from "@/lib/publicApi";

/* ================= LOGIN ================= */
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await apiClient.post("/auth/login", credentials, {
        withCredentials: true,
      });
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || null);
    }
  }
);

/* ================= REGISTER ================= */
export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      const res = await apiClient.post("/auth/signUp", data, {
        withCredentials: true,
      });
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || null);
    }
  }
);

/* ================= GET ME ================= */
export const getMe = createAsyncThunk(
  "auth/getMe",
  async (_, thunkAPI) => {
    try {
      const res = await apiClient.get("/auth/me", {
        withCredentials: true,
      });
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue(null);
    }
  }
);

/* ================= LOGOUT ================= */

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await apiClient.post("/auth/logout", {}, { withCredentials: true });
      return true;
    } catch {
      return thunkAPI.rejectWithValue(null);
    }
  }
);

/* ================= VERIFY MOBILE (🔥 FIXED) ================= */


export const verifyMobile = createAsyncThunk(
  "auth/verifyMobile",
  async (firebaseIdToken, thunkAPI) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/verify-mobile`,
        {},
        {
          headers: {
            Authorization: `Bearer ${firebaseIdToken}`,
          },
          withCredentials: true,
        }
      );

      return res.data.user;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || { message: "Verification failed" }
      );
    }
  }
);





// export const verifyEmail = createAsyncThunk(
//   "auth/verifyEmail",
//   async (firebaseIdToken, thunkAPI) => {
//     try {
//       const res = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/verify-email-otp`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${firebaseIdToken}`,
//           },
//           withCredentials: true,
//         }
//       );

//       return res.data.user;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(
//         err.response?.data || { message: "Verification failed" }
//       );
//     }
//   }
// );




// export const verifyEmail = createAsyncThunk(
//  "auth/verifyEmail",
//   async (_, thunkAPI) => {
//     try {
//       await apiClient.post("/verify-email-otp", {}, { withCredentials: true });
//       return true;
//     } catch {
//       return thunkAPI.rejectWithValue(null);
//     }
//   }
// );



export const verifyEmailOtp = createAsyncThunk(
  "auth/verifyEmailOtp",
  async ({ otp, email }, thunkAPI) => {
    try {
      const res = await apiClient.post(
        "/auth/verify-email-otp",
        { otp, email },
        { withCredentials: true }
      );
      return res.data.user;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || { message: "Email verification failed" }
      );
    }
  }
);






export const resendEmailOtp = createAsyncThunk(
  "auth/resendEmailOtp",
  async ({ email }, { rejectWithValue }) => {
    try {
      const res = await publicApi.post("/auth/resend-email-otp", { email });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);










/* ================= SLICE ================= */
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      /* login */
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // /* register */
      // .addCase(register.fulfilled, (state, action) => {
      //   state.user = action.payload.user;
      // })


      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null; // 🔥 NOT LOGGED IN YET
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })



      /* getMe */
      .addCase(getMe.fulfilled, (state, action) => {
        state.user = action.payload;
      })

    /* logout */
    .addCase(logout.fulfilled, (state) => {
      state.user = null;
    })




    .addCase(verifyEmailOtp.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(verifyEmailOtp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    })
    .addCase(verifyEmailOtp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });


},
});

export default authSlice.reducer;

