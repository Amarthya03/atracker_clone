import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getTasks = createAsyncThunk("tasks/getTasks", async () => {
	const res = await axios.get("http://localhost:8080");
	return res.data;
});

export const taskSlice = createSlice({
	name: "task",
	initialState: {
		status: "uninitialized",
		value: [],
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getTasks.pending, (state, action) => {})
			.addCase(getTasks.fulfilled, (state, action) => {})
			.addCase(getTasks.rejected, (state, action) => {});
	},
});

export default taskSlice.reducer;
