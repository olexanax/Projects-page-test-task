import { Link } from "react-router-dom";

const ProjectsCard: React.FC = () => {
    return (
        <li className=" p-4 flex flex-col gap-2 items-center w-96 rounded-2xl bg-white">
            <img
                className="rounded-2xl"
                src="https://icapgroupgmbh.com/Quotely.jpg"
                alt=""
            />
            <h3 className="uppercase tracking-widest p-2 font-extrabold ">
                NAME
            </h3>
            <p className="text-neutral-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, at. Unde repellat ex similique voluptatem assumenda ut
                odit numquam veritatis, maiores optio quae est non porro quidem
                a sit doloremque.
            </p>
            <Link
                to={`/aboutProject/63`}
                className="w-full h-10 bg-[#1890ff] rounded-full flex justify-center items-center text-white hover:bg-[#69b6ff]"
            >
                Read More
            </Link>
        </li>
    );
};

export default ProjectsCard;
