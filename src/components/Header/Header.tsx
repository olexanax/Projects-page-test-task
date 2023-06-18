import { Link, NavLink } from "react-router-dom";
import logo from "../../images/Logo.png";

const Header: React.FC = () => {
    return (
        <header className="flex sm:flex-nowrap flex-wrap justify-center items-center gap-4 sm:gap-16  h-40 p-1 sm:h-24 bg-slate-300 w-full">
            <Link to="/">
                <img className="h-16" src={logo} alt="logo" />
            </Link>
            <nav className="flex gap-4">
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
                <NavLink
                    to="/myCV"
                    style={({ isActive }) => ({
                        color: isActive ? "#00a2ff" : "black",
                    })}
                    className="hover:underline"
                >
                    My CV
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
