import React from "react";

const LoginBtn = ({ text }) => {
    return (
        <button className="mt-5 bg-red-500 w-full py-3 text-center text-white text-lg rounded-md font-normal loginBtn hover:text-dark-blue hover:bg-white border border-main transition duration-300">
            {text}
        </button>
    );
};

export default LoginBtn;
