import gif from "../../images/error.gif";

const ErrorMessage: React.FC = () => {
    return (
        <div className="w-full flex flex-col gap-5 items-center justify-center p-4">
            <h3 className=" text-3xl">The requested URL was not found.</h3>
            <img src={gif} alt="error gif" />
        </div>
    );
};

export default ErrorMessage;
