import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  SidebarClose: false,
	ResSidebarOpen: false,
	IconSidebar: false,
};

const SidebarSlice = createSlice({
  name: 'Sidebar',
  initialState,
  reducers: {
    HandleSidebar: (state) => {
			state.ResSidebarOpen = false
			state.SidebarClose = !state.SidebarClose
		},
		HandleResSidebar: (state) => {
			state.ResSidebarOpen = !state.ResSidebarOpen
			state.IconSidebar = state.ResSidebarOpen
			console.log(state.ResSidebarOpen);
			state.SidebarClose = false;
		},
		HandleIcon : (state) => {
			state.IconSidebar = false;
		},
		HandleIconTrue : (state) => {
			state.IconSidebar = true;
		}
  },
});

// Export actions
export const { HandleSidebar , HandleResSidebar, HandleIcon, HandleIconTrue} = SidebarSlice.actions;

// Export reducer
export default SidebarSlice.reducer;