import BackButton from "../BackButton/BackButton";

const ProjectInfo: React.FC = () => {
    return (
        <>
            <div className="relative w-full flex flex-col items-center p-4 gap-4">
                <h1 className="text-6xl">Name</h1>
                <img
                    className="rounded-2xl h-96"
                    src="https://icapgroupgmbh.com/Quotely.jpg"
                    alt=""
                />
                <p className="p-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam dolore quasi totam dolorem dignissimos consequuntur
                    natus alias. Suscipit quam adipisci dolores at, asperiores
                    incidunt dolor sit harum dicta esse sed!Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Aliquam dolore quasi
                    totam dolorem dignissimos consequuntur natus alias. Suscipit
                    quam adipisci dolores at, asperiores incidunt dolor sit
                    harum dicta esse sed!Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Aliquam dolore quasi totam dolorem
                    dignissimos consequuntur natus alias. Suscipit quam adipisci
                    dolores at, asperiores incidunt dolor sit harum dicta esse
                    sed!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam dolore quasi totam dolorem dignissimos consequuntur
                    natus alias. Suscipit quam adipisci dolores at, asperiores
                    incidunt dolor sit harum dicta esse sed!Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Aliquam dolore quasi
                    totam dolorem dignissimos consequuntur natus alias. Suscipit
                    quam adipisci dolores at, asperiores incidunt dolor sit
                    harum dicta esse sed!
                </p>
                <BackButton />{" "}
            </div>
        </>
    );
};

export default ProjectInfo;
