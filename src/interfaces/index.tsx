import store from "../store";
import { EntityState } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface ProjectType {
    id: string;
    name: string;
    ShortDescription: string;
    longDescription: string;
    image: string;
}
export interface ProjectsCardProps extends ProjectType {}
export interface ProjectsState extends EntityState<ProjectType> {
    projectsLoadingStatus: "idle" | "loading" | "error";
}
