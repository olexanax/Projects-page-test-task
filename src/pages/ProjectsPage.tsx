import ProjectsWrapper from "../components/ProjectsWrapper/ProjectsWrapper";
import QuoteBlock from "../components/QuoteBlock/QuoteBlock";
const ProjectsPage: React.FC = () => {
    return (
        <>
            <h2 className=" sm:text-5xl text-3xl mt-6 font-extrabold text-neutral-600 py-4 px-12  bg-white border rounded-xl">
                Our projects
            </h2>
            <ProjectsWrapper />
            <QuoteBlock />
        </>
    );
};

export default ProjectsPage;
