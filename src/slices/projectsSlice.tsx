import {
    createSlice,
    createEntityAdapter,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";
import { ProjectType, RootState, ProjectsState } from "../interfaces";

const projectsAdapter = createEntityAdapter<ProjectType>();

const initialState: ProjectsState = projectsAdapter.getInitialState({
    projectsLoadingStatus: "idle",
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
                state.projectsLoadingStatus = "loading";
            })
            .addCase(fetchProjects.fulfilled, (state, { payload }) => {
                projectsAdapter.setAll(state, payload);
                state.projectsLoadingStatus = "idle";
            })
            .addCase(fetchProjects.rejected, (state) => {
                state.projectsLoadingStatus = "error";
            });
    },
});

const { reducer } = projectsSlice;
export default reducer;
export const { selectAll } = projectsAdapter.getSelectors(
    (state: RootState) => state.projects
);
