import BackButton from "../BackButton/BackButton";
import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import { useEffect, useState } from "react";
import { ProjectType } from "../../interfaces";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Spinner from "../Spinner/Spinner";

const ProjectInfo: React.FC = () => {
    const [project, setProject] = useState<ProjectType>();
    const { projectId } = useParams();
    const { request } = useHttp();
    const [status, setStatus] = useState<"loading" | "idle" | "error">(
        "loading"
    );

    useEffect(() => {
        request(
            `https://my-json-server.typicode.com/olexanax/ProjectsPageDB/projects/${projectId}`
        )
            .then((res) => {
                setProject(res);
                setStatus("idle");
            })
            .catch(() => setStatus("error"));
    }, []);

    const spinner = status === "loading" ? <Spinner /> : null;
    const error = status === "error" ? <ErrorMessage /> : null;
    const content =
        status === "idle" ? (
            <>
                <h1 className="sm:text-6xl text-3xl pl-8 pr-8 text-center">
                    {project?.name}
                </h1>
                <img
                    className="rounded-2xl max-h-96"
                    src={project?.image}
                    alt=""
                />
                <p className="sm:p-10">{project?.longDescription}</p>
            </>
        ) : null;

    return (
        <>
            <div className="relative w-full flex flex-col items-center p-4 gap-4">
                {spinner}
                {error}
                {content}
                <BackButton />
            </div>
        </>
    );
};

export default ProjectInfo;
