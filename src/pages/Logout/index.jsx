import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const Logout = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <h1>HomePage</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Logout;
