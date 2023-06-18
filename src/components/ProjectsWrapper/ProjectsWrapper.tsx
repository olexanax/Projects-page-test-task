import ProjectsCard from "../ProjectsCard/ProjectsCard";
import { selectAll, fetchProjects } from "../../slices/projectsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, ProjectType, RootState } from "../../interfaces";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Spinner from "../Spinner/Spinner";

const ProjectsWrapper: React.FC = () => {
    const projects = useSelector(selectAll);
    const status = useSelector(
        (state: RootState) => state.projects.projectsLoadingSataus
    );
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchProjects());
    }, []);
    useEffect(() => {
        console.log(projects);
    });

    const spinner = status === "loading" ? <Spinner /> : null;
    const error = status === "error" ? <ErrorMessage /> : null;
    const content =
        status === "idle"
            ? projects.map(
                  ({
                      name,
                      id,
                      image,
                      ShortDescription,
                      longDescription,
                  }: ProjectType) => (
                      <ProjectsCard
                          key={id}
                          id={id}
                          name={name}
                          ShortDescription={ShortDescription}
                          longDescription={longDescription}
                          image={image}
                      />
                  )
              )
            : null;

    return (
        <ul className="p-10 flex flex-wrap gap-8 justify-center">
            {spinner}
            {error}
            {content}
        </ul>
    );
};

export default ProjectsWrapper;
