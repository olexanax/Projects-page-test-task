import store from "../store";

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
