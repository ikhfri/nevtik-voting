import React from "react";

const LoginBanner = ({ header, text }) => {
    return (
        <div className="w-full lg:w-2/3 relative">
            {/* <div className="flex flex-col absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center justify-center">
                    <img src="/images/kampak.png" alt="" width={70} />
                    <img src="/images/mppk.png" alt="" width={70} />
                    <img src="/images/osis.png" alt="" width={80} />
                </div>
                <div className="w-[32rem] md:text-center">
                    <h1 className="text-dark-blue text-2xl md:text-6xl font-bold uppercase text-shadow">
                        {header}
                    </h1>
                    <p className="text-dark-blue text-xl md:text-2xl font-bold">
                        {text}
                    </p>
                </div>
            </div> */}
            <div className="relative top-0 -left-36">
                <div className="absolute">
                    <img src="/images/rectangle.png" alt="" width={590} />
                </div>
            </div>
            <div className="relative top-0 left-80">
                <div className="absolute transform -scale-x-100">
                    <img src="/images/rectangle.png" alt="" width={590} />
                </div>
            </div>
        </div>
    );
};

export default LoginBanner;
