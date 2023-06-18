import { useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return (
        <div className=" text-2xl absolute left-4 top-4 flex items-center gap-2">
            <p onClick={goBack}>Back</p>
        </div>
    );
};

export default BackButton;
