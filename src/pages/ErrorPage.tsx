import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import BackButton from "../components/BackButton/BackButton";
const ErrorPage = () => {
    return (
        <div className="relative w-full">
            <ErrorMessage />
            <BackButton />
        </div>
    );
};

export default ErrorPage;
