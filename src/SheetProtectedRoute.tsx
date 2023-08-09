import { Navigate } from "react-router-dom";


const user = JSON.parse(localStorage.getItem("authenticated") || "[]")

const SheetProtectedRoutes = () => {
  return user.length > 0 ? <Navigate to="/googlesheet" /> : <Navigate to="/" />;
};

export default SheetProtectedRoutes;