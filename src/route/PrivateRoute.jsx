import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
  
    if (loading) {
      return (
        <div className="h-[70vh] flex flex-col justify-center items-center">
          Loading......
        </div>
      );
    }
  
    if (user) {
      return children;
    } else {
      return <Navigate to="/login" replace state={location.pathname}></Navigate>;
    }
  };
  
  export default PrivateRoute;