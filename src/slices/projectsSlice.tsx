import {
    createSlice,
    createEntityAdapter,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";
import { ProjectType, RootState } from "../interfaces";

const projectsAdapter = createEntityAdapter<ProjectType>();

const initialState = projectsAdapter.getInitialState({
    projectsLoadingSataus: "idle",
});

export const fetchProjects = createAsyncThunk("projects/fetchProjects", () => {
    const { request } = useHttp();
    return request(
        "https://my-json-server.typicode.com/olexanax/ProjectsPageDB/projects"
    );
});

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.projectsLoadingSataus = "loading";
            })
            .addCase(fetchProjects.fulfilled, (state, { payload }) => {
                projectsAdapter.setAll(state, payload);
                state.projectsLoadingSataus = "idle";
            })
            .addCase(fetchProjects.rejected, (state) => {
                state.projectsLoadingSataus = "error";
            });
    },
});

const { reducer } = projectsSlice;
export default reducer;
export const { selectAll } = projectsAdapter.getSelectors(
    (state: RootState) => state.projects
);
