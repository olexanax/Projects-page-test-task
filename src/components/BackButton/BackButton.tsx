import { useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const handleKeyPress = (
        event: React.KeyboardEvent<HTMLParagraphElement>
    ) => {
        if (event.key === "Enter") {
            goBack();
        }
    };

    return (
        <div className="text-xl absolute left-4 top-4 flex items-center gap-2">
            <p
                className="p-4 bg-white rounded-xl border-2 hover:text-2xl"
                onClick={goBack}
                onKeyDown={handleKeyPress}
                tabIndex={0}
                role="button"
            >
                Back
            </p>
        </div>
    );
};

export default BackButton;
