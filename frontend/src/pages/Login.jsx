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
                    (response && response.status === 500)
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
        <div className="flex justify-center items-center h-screen">
            <div className="w-11/12 lg:w-10/12 glassmorphism overflow-hidden h-[85vh] rounded-lg">
                <div className="flex flex-col sm:flex-row h-full">
                    <LoginBanner
                        header="pemira 2024"
                        text="“Satukan Suara, Wujudkan Demokrasi,
    Lahirkan Pemimpin Berdedikasi”"
                    />
                    <div className="w-full lg:w-1/3 px-12 flex flex-col justify-center gap-16 z-50 bg-white">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center">
                                <img
                                    src="/images/kampak.png"
                                    alt=""
                                    width={40}
                                />
                                <img src="/images/mppk.png" alt="" width={40} />
                                <img src="/images/osis.png" alt="" width={45} />
                            </div>
                            <div className="w-[32rem] md:text-center">
                                <Title title="pemilu raya osis" />
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
                                label="NIS"
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
                        <div className="flex gap-2 items-center justify-center">
                            <h2 className="text-dark-blue">Powered By</h2>
                            <img src="/images/nevtik.png" alt="" width={40} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
