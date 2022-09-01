import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetail from "./pages/ProjectDetail";
import RecoveryPassword from "./pages/RecoveryPassword";
import RegisterProduct from "./pages/RegisterProduct";
import ToolsPage from "./pages/ToolsPage";
import SignUp from "./pages/SignUp/Index";

import { AuthContext, AuthProvider } from "./contexts/auth";
import Logout from "./pages/Logout/index";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    if (loading) {
      return <div className="loading">Carregando...</div>;
    }
    if (!authenticated) {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/projeto" element={<ProjectPage />} />
          <Route exact path="/meusprojetos" element={<ProjectDetail />} />
          <Route exact path="/Logout" element={<Logout />} />
          <Route exact path="/recuperar-senha" element={<RecoveryPassword />} />
          <Route
            exact
            path="/cadastrar-produto"
            element={<RegisterProduct />}
          />
          <Route
            exact
            path="/detalhe-projeto/:id"
            element={<ProjectDetail />}
          />
          <Route exact path="/ferramentas/:id" element={<ToolsPage />} />
          <Route exact path="/cadastrar-usuario" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
