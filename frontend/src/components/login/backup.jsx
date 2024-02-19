import React from "react";

const LoginBanner = ({ header, text }) => {
    return (
        <div className="w-full lg:w-2/3 flex flex-row sm:flex-col justify-center">
            <div className="flex items-center justify-center ml-5">
                <img src="/images/kampak.png" alt="" width={70} />
                <img src="/images/mppk.png" alt="" width={70} />
                <img src="/images/osis.png" alt="" width={80} />
            </div>
            <div className="w-[30rem] m-36  md:text-center">
                <h1 className="text-dark-blue text-2xl md:text-6xl font-bold uppercase text-shadow">
                    {header}
                </h1>
                <p className="text-dark-blue text-xl md:text-2xl">{text}</p>
            </div>
            <div className="flex gap-2 ml-5 items-center justify-center">
                <h2 className="text-dark-blue text-xl">Powered By</h2>
                <img src="/images/nevtik.png" alt="" width={50} />
            </div>
        </div>
    );
};

export default LoginBanner;
