import React from "react";

const Closed = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-36">
            <div className="flex items-center">
                <img
                    src="/images/kampak.png"
                    alt="logo-kampak"
                    className="md:w-36 w-20"
                />
                <img
                    src="/images/mppk.png"
                    alt="logo-mppk"
                    className="ml-2 md:w-36 w-20"
                />
                <img
                    src="/images/osis.png"
                    alt="logo-osis"
                    className="md:w-36 w-24"
                />
            </div>
            <div className="text-dark-blue text-center">
                <h1 className="md:text-6xl text-3xl font-bold">
                    Voting is closed!
                </h1>
                <h3 className="md:text-3xl text-2xl">
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
    );
};

export default Closed;
