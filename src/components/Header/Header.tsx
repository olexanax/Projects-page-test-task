import { Link, NavLink } from "react-router-dom";
import logo from "../../images/Logo.png";

const Header: React.FC = () => {
    return (
        <header className="flex justify-center items-center gap-4 sm:gap-16  h-16 p-1 sm:h-24 bg-slate-300 w-full">
            <Link to="/">
                <img className="h-16" src={logo} alt="logo" />
            </Link>
            <nav>
                <NavLink
                    end
                    style={({ isActive }) => ({
                        color: isActive ? "#00a2ff" : "black",
                    })}
                    to="/"
                    className="hover:underline"
                >
                    Projects
                </NavLink>
                {/* <NavLink to="">My CV</NavLink> */}
            </nav>
        </header>
    );
};

export default Header;
