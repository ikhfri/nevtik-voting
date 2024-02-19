import React from "react";
import { Navbar } from "../components";

const Voted = () => {
    return (
        <div>
            <div className="fixed z-50 md:static glassmorphism w-full ">
                <Navbar title={"pemira smk negeri 1 Cibinong"} />
            </div>
            <div className="flex flex-col items-center justify-center mt-36">
                <div className="ml-5 flex items-center">
                    <img
                        src="/images/kampak.png"
                        alt="logo-kampak"
                        width={140}
                    />
                    <img
                        src="/images/mppk.png"
                        alt="logo-mppk"
                        className="ml-2"
                        width={145}
                    />
                    <img src="/images/osis.png" alt="logo-osis" width={145} />
                </div>
                <div className="text-dark-blue text-center">
                    <h1 className="text-6xl font-bold">
                        Thank you for your vote!
                    </h1>
                    <h3 className="text-3xl">
                        'satukan suara, wujudkan demokrasi, lahirkan pemimpin
                        berdedikasi'
                    </h3>
                    <div className="flex gap-1 justify-center items-center">
                        <p className="text-xl">powered by</p>
                        <img
                            src="/images/nevtik.png"
                            alt="logo-nevtik"
                            width={50}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Voted;
