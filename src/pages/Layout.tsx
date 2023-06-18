import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-200">
            <Header />
            <main className=" flex-1 flex flex-col items-center">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
