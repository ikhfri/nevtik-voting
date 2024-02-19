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
        <div className="w-full min-h-screen z-50 gradient-bg">
            <div className="fixed z-50 md:static glassmorphism w-full ">
                <Navbar title={"pemilu raya osis 2024"} logo />
            </div>
            <Outlet />
        </div>
    );
}
