import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../../pages/Layout";
import ProjectsPage from "../../pages/ProjectsPage";
import AboutProjectPage from "../../pages/AboutProjectPage";
import ErrorPage from "../../pages/ErrorPage";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ProjectsPage />} />
                    <Route
                        path="aboutProject/:projectId"
                        element={<AboutProjectPage />}
                    />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
