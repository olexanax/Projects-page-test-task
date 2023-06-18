import { Link } from "react-router-dom";
import { ProjectsCardProps } from "../../interfaces";
const ProjectsCard: React.FC<ProjectsCardProps> = ({
    name,
    id,
    image,
    ShortDescription,
}) => {
    return (
        <li className=" p-2 sm:p-4 flex flex-col gap-2 items-center max-w-[400px] rounded-2xl bg-white">
            <img className="rounded-2xl" src={image} alt="" />
            <h3 className="uppercase tracking-widest p-2 font-extrabold ">
                {name}
            </h3>
            <p className="text-neutral-600">{ShortDescription}</p>
            <Link
                to={`/aboutProject/${id}`}
                className="mt-auto w-full h-10 bg-[#1890ff] rounded-full flex justify-center items-center text-white hover:bg-[#69b6ff]"
            >
                Read More
            </Link>
        </li>
    );
};

export default ProjectsCard;
