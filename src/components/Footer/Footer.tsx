import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="m-auto flex items-center gap-8 h-24 bg-slate-300 w-full">
            <Link to="/">
                <img className="h-16" src={logo} alt="logo" />
            </Link>
        </footer>
    );
};

export default Footer;
