import ProjectsCard from "../ProjectsCard/ProjectsCard";

const ProjectsWrapper: React.FC = () => {
    return (
        <ul className="p-10 flex flex-wrap gap-8 justify-center">
            <ProjectsCard /> <ProjectsCard /> <ProjectsCard /> <ProjectsCard />
            <ProjectsCard /> <ProjectsCard /> <ProjectsCard /> <ProjectsCard />
        </ul>
    );
};

export default ProjectsWrapper;
