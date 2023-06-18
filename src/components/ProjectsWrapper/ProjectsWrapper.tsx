import ProjectsCard from "../ProjectsCard/ProjectsCard";
import { selectAll, fetchProjects } from "../../slices/projectsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, ProjectType } from "../../interfaces";

const ProjectsWrapper: React.FC = () => {
    const projects = useSelector(selectAll);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchProjects());
    }, []);

    return (
        <ul className="p-10 flex flex-wrap gap-8 justify-center">
            {projects.map(
                ({
                    name,
                    id,
                    image,
                    ShortDescription,
                    longDescription,
                }: ProjectType) => (
                    // @ts-ignore
                    <ProjectsCard
                        key={id}
                        name={name}
                        ShortDescription={ShortDescription}
                        longDescription={longDescription}
                        image={image}
                    />
                )
            )}
        </ul>
    );
};

export default ProjectsWrapper;
