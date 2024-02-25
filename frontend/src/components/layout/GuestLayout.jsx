import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

export default function GuestLayout() {
    const { token } = useStateContext();

    if (token) {
        return <Navigate to="/" />;
    }

    return (
        <div className="flex relative transition duration-300">
            <div className="absolute w-full min-h-screen z-50">
                <Outlet />
            </div>
            <div className="gradient-bg w-full min-h-screen">
                <div class="gradients-container">
                    <div class="g1"></div>
                    <div class="g2"></div>
                    <div class="g3"></div>
                    <div class="g4"></div>
                    <div class="g5"></div>
                    <div class="interactive"></div>
                </div>
            </div>
        </div>
    );
}
