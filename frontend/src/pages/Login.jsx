import { React, createRef, useEffect, useState } from "react";
import { LoginBtn, Input, LoginBanner, Alert, Title } from "../components";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider.jsx";

const Login = () => {
    const nisRef = createRef();
    const passwordRef = createRef();
    const { setToken } = useStateContext();
    const [errors, setErrors] = useState(null);

    const onSubmit = (ev) => {
        ev.preventDefault();

        const payload = {
            nis: nisRef.current.value,
            password: passwordRef.current.value,
        };
        axiosClient
            .post("/login", payload)
            .then(({ data }) => {
                setToken(data.access_token);
            })
            .catch((err) => {
                const response = err.response;
                if (
                    (response && response.status === 401) ||
                    (response && response.status === 422) ||
                    (response && response.status === 500) ||
                    (response && response.status === 429)
                ) {
                    setErrors(response.data.message);
                }
            });
    };

    useEffect(() => {
        if (errors) {
            const timeoutId = setTimeout(() => {
                setErrors(null);
            }, 1500);
            return () => clearTimeout(timeoutId);
        }
    }, [errors, setErrors]);

    return (
        <div className="min-h-screen flex items-center justify-center gradient-bg">
            <div className="w-11/12 lg:w-10/12 bg-[#fff] rounded-xl shadow-lg overflow-hidden my-5">
                <div className="flex flex-col sm:flex-row h-full">
                    <LoginBanner />
                    <div className="w-full lg:w-1/3 bg-white">
                        {/* <div className="relative">
                            <img
                                src="/images/rectangle.png"
                                className="w-16 transform -scale-x-100 -scale-y-100 absolute top-0 right-0"
                            />
                        </div> */}
                        <div className="flex flex-col justify-center gap-16 z-50 px-12 h-full">
                            <div className="flex flex-col items-center mt-5 md:mt-0">
                                <div className="flex items-center justify-center">
                                    {/* <img
                                        src="/images/kampak.png"
                                        alt=""
                                        width={40}
                                    /> */}
                                    <img
                                        src="/images/nevtik.png"
                                        alt=""
                                        width={70}
                                    />
                                    {/* <img
                                        src="/images/osis.png"
                                        alt=""
                                        width={45}
                                    /> */}
                                </div>
                                <div className="w-[32rem] text-center  ">
                                <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-red-600 from-100% to-white text-2xl md:text-4xl font-extrabold uppercase title">
            NEVTIK VOTE
                                 </h1>
                                </div>
                                <h2 className="text-xl md:text-2xl mb-1 text-dark-blue mt-2">
                                    Sign In
                                </h2>
                            </div>
                            {errors && <Alert text={errors} error />}
                            <form onSubmit={onSubmit} method="POST">
                                <Input
                                    innerRef={nisRef}
                                    name="nis"
                                    label="NIS / NIP"
                                    icon="mdi:user"
                                />
                                <Input
                                    innerRef={passwordRef}
                                    name="password"
                                    label="Password"
                                    icon="mdi:lock-outline"
                                    showeye
                                />
                                <LoginBtn text="Sign In" />
                            </form>
                            <div className="flex gap-2 items-center justify-center mb-5 md:mb-0">
                                <h2 className="text-dark-blue">Powered By</h2>
                                <h3 className="font-bold text-gray-500  ">WebDev Team</h3>
                            </div>
                        </div>
                        {/* <div className="relative">
                            <img
                                src="/images/rectangle.png"
                                className="w-16 absolute bottom-0 left-0"
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
