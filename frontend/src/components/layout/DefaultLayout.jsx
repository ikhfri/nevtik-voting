import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import "../../index.css";
import Navbar from "../Navbar";

export default function DefaultLayout() {
    const { token } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="w-full min-h-screen z-50 gradient-bg  ">
            <Navbar   title={"Nevtik Vote"} logo />
            <Outlet />
        </div>
    );
}
