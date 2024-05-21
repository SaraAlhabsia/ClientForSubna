import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("Cart/getPosts", async (productData) => {
  try {
    const response = await axios.get("https://subna-server.onrender.com/getPosts");
    return response.data.posts;
  } catch (error) {
    console.log(error);
  }
});

export const delPost = createAsyncThunk("Cart/delPost", async (postid) => {
  try {
    await axios.delete(`https://subna-server.onrender.com/delPost/${postid}`);
    return postid;
  } catch (error) {
    console.log(error);
  }
});

export const savePost = createAsyncThunk("Cart/savePost", async (productData) => {
  try {
    const response = await axios.post("https://subna-server.onrender.com/savePost", {
      email: productData.EMAIL,
      postMsg: productData.MSG,
    });

    const post = response.data.post;
    return post;
  } catch (error) {
    console.log(error);
  }
});

export const updatePost = createAsyncThunk(
  "Cart/updatePost",
  async (postData) => {
    try {
      const response = await axios.post("https://subna-server.onrender.com/updatePost", {
        postMsg: postData.pmsg,
        pid: postData.pid,
      });

      const post = response.data.post;
      return post;
    } catch (error) {
      console.log(error);
    }
  }
);

const initVal = {
  Cart: [],
  comments: [],
  likes: [],
  status: "idle",
  error: null,
};

const CartSlice = createSlice({
  name: "Cart",
  initialState: initVal,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "Sucess";
        state.Cart = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "Rejected";
        state.error = action.error.message;
      })
      .addCase(delPost.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(delPost.fulfilled, (state, action) => {
        state.status = "Sucess";
        state.Cart = state.Cart.filter((post) => post._id !== action.payload);
      })
      .addCase(delPost.rejected, (state, action) => {
        state.status = "Rejected";
        state.error = action.error.message;
      })
      .addCase(savePost.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(savePost.fulfilled, (state, action) => {
        state.status = "Sucess";
        state.Cart.unshift(action.payload);
      })
      .addCase(savePost.rejected, (state, action) => {
        state.status = "Rejected";
        state.error = action.error.message;
      })
      .addCase(updatePost.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = "Sucess";
        const updatedPostIndex = state.Cart.findIndex(
          (post) => post._id === action.payload._id
        );
        console.log(action.payload);

        if (updatedPostIndex !== -1) {
          //state.Cart[updatedPostIndex] = action.payload;
          state.Cart[updatedPostIndex].postMsg = action.payload.postMsg;
        }
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.status = "Rejected";
        state.error = action.error.message;
      });
  },
});

export default CartSlice.reducer;
