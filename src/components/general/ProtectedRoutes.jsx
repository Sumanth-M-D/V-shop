import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const { isAuthenticated } = useSelector((state) => state.authentication);

  return (
    <>{isAuthenticated ? children : <Navigate to={"/authentication"} />}</>
  );
}

export default ProtectedRoutes;
