import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Users from "../ExampleData";
import axios from "axios";

export const login = createAsyncThunk("users/login", async (userData) => {
  try {
    const response = await axios.post(
      "https://subna-server.onrender.com/login",
      {
        remail: userData.email,
        rpassword: userData.pass,
      }
    );
    console.log(response);
    return response.data.User;
  } catch (error) {
    alert("Invalid Credentials...");
  }
});

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (userData) => {
    try {
      console.log(userData);
      const response = await axios.post(
        "https://subna-server.onrender.com/registerUser",
        {
          name: userData.name,
          email: userData.email,
          password: userData.password,
          pic: "samplepic.jpg",
        }
      );

      const user = response.data.user; //retrieve the response from the server
      return user;
    } catch (error) {
      console.log(error);
    }
  }
);

const initVal = {
  user: {},
  isSuccess: false,
  isError: false,
  isLoading: false,
};

export const UserSlice = createSlice({
  name: "users",
  initialState: initVal,
  reducers: {
    /*validate:(state,action)=>{
            let flag=0;
            Users.map((myuser)=>{
                if(myuser.email==action.payload.email && myuser.pass==action.payload.pass){
                    flag=1;
                    state.user = myuser; // state.user --> globel , = myuser --> valid user
                    state.isSuccess = true;
                    state.isError = false;
                }
                if (flag==0){
                    state.isSuccess=false;
                    state.isError=true;
                }
            });
        }*/
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

//export const { validate } = UserSlice.actions;
export default UserSlice.reducer;
