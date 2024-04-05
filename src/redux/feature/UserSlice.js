import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "User",
	initialState: {
		user: {},
		isLogined: false,
	},
	reducers: {
		setUser: (state, action) => {
			state.filterOptions = action.payload;
		},
		setIsLogin: (state, action) => {
			state.sortOption = action.payload;
		},
	},
});

export const { setUser, setIsLogin, setLoading } = userSlice.actions;
export default userSlice.reducer;
